# Requirements & Open Questions

## Cost Data for "Of Interest" Peptides

**Status:** Open Question

**Issue:** New "Of Interest" peptides (Kisspeptin, Humanin, and others) have arbitrary cost_tier values assigned. The "ordered" peptides have cost data, but the source of this data is unclear.

**Questions:**
- Where does the cost data for "ordered" peptides come from?
- Should "Of Interest" peptides have cost marked as "unknown" rather than guessing?
- Is there a price list or vendor data source we should reference?

**Peptides affected:**
- Kisspeptin (currently set to "high" arbitrarily)
- Humanin (currently set to "high" arbitrarily)
- Other "Of Interest" peptides (Pancragen, Cortagen, Chonluten, Livagen, Selank)

**Action needed:** Determine cost data source or mark as unknown

---

## PubMed Citations for New Peptides

**Status:** Available but excluded

**Issue:** PubMed citation data exists for Kisspeptin and Humanin but was intentionally excluded from the citations integration due to large dataset sizes and potential quality concerns.

**Available data:**
- `pubmed_citations/19_Humanin.csv` - 27,080 citations
- `pubmed_citations/20_Kisspeptin.csv` - 3,736 citations

**Why excluded:** Large datasets may include false positives (generic search results rather than specific peptide research)

**Options:**
1. Add citations with a lower limit (e.g., 5,000 max per peptide)
2. Add with data quality warning note in UI
3. Leave without citations until data can be curated
4. Manually review and curate subset of most relevant citations

**Action needed:** Decide whether to include large citation datasets for Kisspeptin and Humanin

---

## Similar Data Quality Issues

**Note:** CJC-1295 also has a large citation dataset that was excluded:
- `pubmed_citations/10_CJC_1295.csv` - 51,226 citations

**Resolution:** CJC-1295 was consolidated with Mod GRF 1-29 entry, so no separate peptide entry exists.
