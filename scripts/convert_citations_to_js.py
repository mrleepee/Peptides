#!/usr/bin/env python3
"""
Convert PubMed citation CSV files to JavaScript data file.

Processes CSV files from pubmed_citations/ directory and generates
js/data/citations.js with proper structure for the peptide app.
"""

import csv
import json
import os
import re
from pathlib import Path
from collections import Counter

# Mapping of CSV filename to peptide ID in the app
CSV_TO_PEPTIDE_ID = {
    "01_SLU_PP_332.csv": None,  # Not in our peptide list
    "02_Retatrutide.csv": "retatrutide",
    "03_Selank.csv": "selank",
    "04_Semax.csv": "semax",
    "05_BPC_157.csv": "bpc157",
    "06_Thymosin_beta_4.csv": "tb500",  # TB-500 is Thymosin Beta-4
    "07_TB_500.csv": "tb500",
    "08_Thymosin_alpha_1.csv": None,  # Not in our peptide list
    "09_Sermorelin.csv": None,  # Not in our peptide list (similar to modgrf129)
    "10_CJC_1295.csv": None,  # Too many citations (50k+), likely false positives
    "11_Ipamorelin.csv": "ipamorelin",
    "12_Tesamorelin.csv": "tesamorelin",
    "13_Hexarelin.csv": None,  # Not in our peptide list
    "14_GHRP_2.csv": None,  # Not in our peptide list
    "15_GHRP_6.csv": None,  # Not in our peptide list
    "16_GHK_Cu.csv": "ghkcu",
    "17_DSIP.csv": "dsip",
    "18_MOTS_c.csv": "motsc",
    "19_Humanin.csv": None,  # Too many citations (27k+), likely false positives
    "20_Kisspeptin.csv": None,  # Not in our peptide list (3k+ citations)
    "21_PT_141.csv": None,  # Not in our peptide list
    "22_Melanotan_II.csv": None,  # Not in our peptide list (3k+ citations)
    "23_Melanotan_I.csv": None,  # Not in our peptide list
    "24_Dihexa.csv": None,  # Not in our peptide list
    "25_Cerebrolysin.csv": None,  # Not in our peptide list
    "26_Cagrilintide.csv": None,  # Not in our peptide list
    "27_AOD_9604.csv": "aod9604",
    "28_Follistatin_344.csv": None,  # Not in our peptide list
    "29_IGF_1_LR3.csv": None,  # Not in our peptide list
    "30_IGF_1_DES.csv": None,  # Not in our peptide list
    "31_Epitalon.csv": "epitalon",
    "32_Thymalin.csv": "thymulin",  # Thymalin is similar to Thymulin
    "33_Pinealon.csv": "pinealon",
    "34_LL_37.csv": "ll37",
    "35_StudyType_Summary_ALL.csv": None,  # Summary file, skip
}

# Maximum citations per peptide (to avoid massive files)
MAX_CITATIONS = 5000


def parse_csv_file(csv_path):
    """Parse a single CSV file and return list of citation dictionaries."""
    citations = []
    seen_pmids = set()

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            pmid = row.get('PMID', '').strip()
            if not pmid or pmid in seen_pmids:
                continue
            seen_pmids.add(pmid)

            # Parse year from PubYear
            pub_year = row.get('PubYear', '').strip()
            try:
                year = int(pub_year) if pub_year else None
            except ValueError:
                year = None

            citation = {
                'pmid': pmid,
                'title': row.get('Title', ''),
                'journal': row.get('Journal', ''),
                'year': year,
                'authors': row.get('Authors', ''),
                'abstract': row.get('Abstract', ''),
                'study_type': row.get('StudyClassification', 'Unknown'),
                'url': row.get('PubMed URL', f'https://pubmed.ncbi.nlm.nih.gov/{pmid}/'),
                'mesh_terms': row.get('MeSHTerms', ''),
                'keywords': row.get('Keywords', ''),
                'doi': row.get('DOI', ''),
            }
            citations.append(citation)

    return citations


def normalize_study_type(study_type):
    """Normalize study type to standard categories."""
    if not study_type:
        return 'Other'

    study_type_lower = study_type.lower()

    if 'randomized' in study_type_lower and 'trial' in study_type_lower:
        return 'Randomized Controlled Trial'
    if 'controlled clinical trial' in study_type_lower:
        return 'Controlled Clinical Trial'
    if 'clinical trial' in study_type_lower:
        return 'Clinical Trial'
    if 'review' in study_type_lower:
        return 'Review'
    if 'meta-analysis' in study_type_lower:
        return 'Meta-Analysis'
    if 'cohort' in study_type_lower:
        return 'Cohort Study'
    if 'case-control' in study_type_lower:
        return 'Case-Control Study'
    if 'animal' in study_type_lower:
        return 'Animal Study'
    if 'in vitro' in study_type_lower:
        return 'In Vitro Study'

    return 'Other'


def count_study_types(citations):
    """Count study types in citations."""
    counts = Counter()
    for citation in citations:
        study_type = normalize_study_type(citation.get('study_type', ''))
        counts[study_type] += 1
    return dict(counts)


def process_all_citations(input_dir, output_file, max_citations=None):
    """Process all CSV files and generate JavaScript data file."""
    citations_data = {}
    input_path = Path(input_dir)

    for csv_file, peptide_id in CSV_TO_PEPTIDE_ID.items():
        if peptide_id is None:
            continue

        csv_path = input_path / csv_file
        if not csv_path.exists():
            print(f"Warning: {csv_file} not found, skipping")
            continue

        print(f"Processing {csv_file} -> {peptide_id}")
        citations = parse_csv_file(csv_path)

        # Apply citation limit if specified
        if max_citations and len(citations) > max_citations:
            print(f"  Warning: Limiting {len(citations)} citations to {max_citations}")
            citations = citations[:max_citations]

        study_counts = count_study_types(citations)

        citations_data[peptide_id] = {
            'total': len(citations),
            'study_counts': study_counts,
            'citations': citations,
        }

        print(f"  Total: {len(citations)} citations")
        print(f"  Study types: {study_counts}")

    # Generate JavaScript file
    generate_js_file(citations_data, output_file)
    print(f"\nGenerated {output_file}")
    print(f"Total peptides with citations: {len(citations_data)}")


def generate_js_file(citations_data, output_file):
    """Generate JavaScript file with citations data."""

    def escape_js_string(s):
        """Escape string for JavaScript."""
        if s is None:
            return ''
        s = str(s)
        # Replace problematic characters
        s = s.replace('\\', '\\\\')
        s = s.replace('"', '\\"')
        s = s.replace("'", "\\'")
        s = s.replace('\n', '\\n')
        s = s.replace('\r', '\\r')
        s = s.replace('\t', '\\t')
        return s

    lines = [
        "// File: js/data/citations.js",
        "// Generated from pubmed_citations/ CSV files",
        "// Contains PubMed citation data for peptides",
        "",
        "window.APP = window.APP || {};",
        "window.APP.CITATIONS_DATA = {",
    ]

    for peptide_id, data in sorted(citations_data.items()):
        lines.append(f'  "{peptide_id}": {{')
        lines.append(f'    "total": {data["total"]},')
        lines.append('    "study_counts": {')

        for study_type, count in sorted(data['study_counts'].items()):
            lines.append(f'      "{escape_js_string(study_type)}": {count},')
        lines.append('    },')
        lines.append('    "citations": [')

        for citation in data['citations']:
            lines.append('      {')
            lines.append(f'        "pmid": "{escape_js_string(citation["pmid"])}",')
            lines.append(f'        "title": "{escape_js_string(citation["title"])}",')
            lines.append(f'        "journal": "{escape_js_string(citation["journal"])}",')
            lines.append(f'        "year": {citation["year"] if citation["year"] else "null"},')
            lines.append(f'        "authors": "{escape_js_string(citation["authors"])}",')
            lines.append(f'        "abstract": "{escape_js_string(citation["abstract"])}",')
            lines.append(f'        "study_type": "{escape_js_string(citation["study_type"])}",')
            lines.append(f'        "url": "{escape_js_string(citation["url"])}",')
            lines.append(f'        "mesh_terms": "{escape_js_string(citation["mesh_terms"])}",')
            lines.append(f'        "keywords": "{escape_js_string(citation["keywords"])}",')
            lines.append(f'        "doi": "{escape_js_string(citation["doi"])}"')
            lines.append('      },')

        lines.append('    ]')
        lines.append('  },')

    lines.append('};')

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))


def main():
    """Main entry point."""
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    input_dir = project_root / "pubmed_citations"
    output_file = project_root / "outputs" / "js" / "data" / "citations.js"

    print("PubMed Citations to JavaScript Converter")
    print("=" * 50)
    print(f"Input directory: {input_dir}")
    print(f"Output file: {output_file}")
    print(f"Max citations per peptide: {MAX_CITATIONS}")
    print()

    if not input_dir.exists():
        print(f"Error: Input directory {input_dir} not found")
        return 1

    # Create output directory if needed
    output_file.parent.mkdir(parents=True, exist_ok=True)

    process_all_citations(input_dir, output_file, max_citations=MAX_CITATIONS)
    return 0


if __name__ == '__main__':
    exit(main())
