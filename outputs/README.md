# Peptide Protocols & Stacks

A comprehensive, structured database of peptides and peptide stacks for performance, recovery, longevity, and health optimization.

## 📁 Project Structure

```
.
├── peptide-protocols-app.html          # Interactive web application
├── peptide_protocols/
│   ├── peptides/                       # Individual peptide JSON files
│   │   ├── tesamorelin.json
│   │   ├── ipamorelin.json
│   │   ├── bpc157.json
│   │   ├── tb500.json
│   │   ├── ghkcu.json
│   │   ├── motsc.json
│   │   ├── retatrutide.json
│   │   ├── pinealon.json
│   │   ├── epitalon.json
│   │   ├── thymulin.json
│   │   ├── selank.json
│   │   └── semax.json
│   ├── stacks/                         # Stack protocol JSON files
│   │   ├── gh_foundation.json
│   │   ├── repair_resilience.json
│   │   ├── aesthetic.json
│   │   ├── metabolic_energy.json
│   │   ├── longevity.json
│   │   ├── cognitive.json
│   │   └── ultimate_longevity_sibo_cognitive.json
│   ├── peptides_database.json          # Complete peptides database
│   └── stacks_database.json            # Complete stacks database
└── README.md                           # This file
```

## 🚀 Quick Start

### Option 1: Interactive Web App (Recommended)
Simply open `peptide-protocols-app.html` in any modern web browser. No server or installation required!

Features:
- Browse all 12 peptides with detailed information
- Explore 7 protocol stacks
- Search and filter by category
- View detailed protocols and dosing guidelines
- Responsive, mobile-friendly interface

### Option 2: Use the JSON Data
All data is available in structured JSON format for integration into your own applications.

```javascript
// Load the peptides database
const peptides = require('./peptide_protocols/peptides_database.json');

// Load the stacks database
const stacks = require('./peptide_protocols/stacks_database.json');

// Access individual peptide
const bpc157 = require('./peptide_protocols/peptides/bpc157.json');
```

## 📊 What's Included

### 12 Peptides Covered

**Growth Hormone Optimization**
- Tesamorelin (GHRH Analogue)
- Ipamorelin (GH Secretagogue)

**Repair & Recovery**
- BPC-157 (Body Protection Compound)
- TB-500 (Thymosin Beta-4)

**Aesthetic & Skin Health**
- GHK-Cu (Copper Peptide)

**Metabolic & Energy**
- MOTS-c (Mitochondrial Peptide)
- Retatrutide (Triple Agonist)

**Longevity & Anti-Aging**
- Pinealon (Bioregulator)
- Epitalon (Telomerase Activator)
- Thymulin (Immune Support)

**Cognitive Enhancement**
- Selank (Anxiolytic Nootropic)
- Semax (Cognitive Enhancer)

### 7 Protocol Stacks

1. **Growth Hormone Foundation Stack** - Tesamorelin + Ipamorelin
2. **Repair & Resilience Stack** - BPC-157 + TB-500
3. **Aesthetic Enhancement** - GHK-Cu
4. **Energy & Metabolic Control Stack** - MOTS-c + Retatrutide
5. **Longevity & Cellular Health** - Pinealon + Epitalon + Thymulin
6. **Cognitive Enhancement Stack** - Selank + Semax
7. **Ultimate Longevity, SIBO & Cognitive Stack** - BPC-157 + Epitalon + Selank + Semax

## 📋 Data Schema

### Peptide Object Structure

```json
{
  "id": "unique_identifier",
  "name": "Peptide Name",
  "type": "Classification type",
  "category": "Primary category",
  "mechanism": "Mechanism of action description",
  "half_life": "Biological half-life",
  "dosing": "Research dosing protocol",
  "administration": "Route of administration",
  "primary_benefits": ["benefit1", "benefit2"],
  "research_findings": "Summary of research",
  "system_targets": ["system1", "system2"],
  "accessibility": "Availability status",
  "cost_tier": "low|medium|high",
  "special_notes": "Optional special considerations"
}
```

### Stack Object Structure

```json
{
  "id": "unique_identifier",
  "name": "Stack Name",
  "peptides": ["peptide_id1", "peptide_id2"],
  "primary_goals": ["goal1", "goal2"],
  "mechanism": "How the stack works",
  "protocol": {
    "peptide_id": {
      "dose": "dosage",
      "frequency": "frequency",
      "timing": "when to take",
      "administration": "how to administer"
    }
  },
  "cycling": "Cycling protocol",
  "synergy_notes": "Why peptides work together",
  "considerations": ["consideration1", "consideration2"]
}
```

## 🎯 Use Cases

### For Researchers & Students
- Structured data for analysis and study
- Comprehensive mechanism information
- Research findings and citations context

### For Developers
- JSON data ready for integration
- RESTful-friendly structure
- Easy to query and filter

### For Health Practitioners
- Quick reference protocols
- Dosing guidelines
- Synergy and interaction information

### For Biohackers & Optimization
- Stack recommendations
- Goal-oriented protocols
- Accessibility and cost information

## 🔍 Highlighted Stacks

### Best for Longevity + Gut Health (SIBO) + Cognitive Enhancement
**Ultimate Longevity, SIBO & Cognitive Stack**
- BPC-157 (oral for gut repair)
- Epitalon (telomerase activation)
- Selank (anxiety/stress management)
- Semax (focus and cognition)

This stack is recommended for:
- SIBO and gut healing
- Anti-aging and longevity
- Cognitive performance
- Affordable and accessible

### Best for Athletic Performance & Recovery
**Repair & Resilience Stack**
- BPC-157 (tissue repair, angiogenesis)
- TB-500 (systemic recovery, anti-inflammatory)

### Best for Body Composition & GH Optimization
**Growth Hormone Foundation Stack**
- Tesamorelin (GHRH signal)
- Ipamorelin (GH release amplifier)

## ⚠️ Important Disclaimers

1. **Educational Purpose Only**: This information is for educational and research purposes only.

2. **Consult Healthcare Providers**: Always consult with a qualified healthcare provider before starting any peptide protocol.

3. **Research Status**: Many peptides are research compounds and not FDA-approved for the uses described.

4. **Individual Variation**: Responses to peptides vary significantly between individuals.

5. **Quality Matters**: Peptide quality and purity vary significantly between suppliers.

## 🛠️ Technical Details

### Web App Technology Stack
- React 18 (CDN)
- Tailwind CSS (CDN)
- Vanilla JavaScript
- No build process required
- Works offline after initial load

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers supported

## 📖 Data Sources

This database was compiled from a comprehensive conversation analyzing:
- Clinical research literature
- FDA-approved applications
- International peptide research
- Bioregulator studies (Khavinson)
- Practical protocols and dosing guidelines

## 🔄 Future Enhancements

Potential additions for future versions:
- Safety profiles and contraindications
- Drug interactions database
- Side effects tracking
- Cost comparison tools
- Supplier directory
- Research paper references
- User experience tracking
- Stack customization tool

## 📝 License

This is an educational resource. Individual use of peptides should be guided by qualified medical professionals.

## 💡 Contributing

To suggest additions or corrections:
1. Review the JSON schema
2. Ensure data accuracy and sources
3. Maintain consistent formatting
4. Update both individual files and database files

---

**Last Updated**: January 2026
**Version**: 1.0
**Peptides**: 12
**Stacks**: 7

For questions or suggestions, consult with qualified healthcare providers and peptide researchers.
