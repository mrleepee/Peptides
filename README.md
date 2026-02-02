# Peptide Protocols & Stacks Database

A comprehensive, interactive database of peptides and peptide stacks for performance, recovery, longevity, and health optimization.

![Project Status](https://img.shields.io/badge/status-active-success)
![Peptides](https://img.shields.io/badge/peptides-14-blue)
![Stacks](https://img.shields.io/badge/stacks-15-purple)

## 🚀 Quick Start

### Interactive Web App (Recommended)

Simply open `outputs/peptide-protocols-app.html` in any modern browser. No server or installation required!

```bash
# Clone the repository
git clone https://github.com/mrleepee/Peptides.git

# Open the web app
open outputs/peptide-protocols-app.html
```

## 📊 What's Included

### 14 Peptides Covered

**Growth Hormone Optimization**
- Tesamorelin (GHRH Analogue)
- Ipamorelin (GH Secretagogue)
- Mod GRF 1-29 (CJC-1295 no DAC)

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

**Anti-Inflammatory & Gut Health**
- KPV (Gut Health & Inflammation)

### 15 Protocol Stacks

1. **Growth Hormone Foundation Stack** - Tesamorelin + Ipamorelin
2. **GH Foundation (Mod GRF)** - Mod GRF 1-29 + Ipamorelin
3. **Repair & Resilience Stack** - BPC-157 + TB-500
4. **SIBO & Gut Healing** - BPC-157 + KPV
5. **Aesthetic Enhancement** - GHK-Cu
6. **Energy & Metabolic Control Stack** - MOTS-c + Retatrutide
7. **Longevity & Cellular Health** - Pinealon + Epitalon + Thymulin
8. **Cognitive Enhancement Stack** - Selank + Semax
9. **Ultimate Longevity, SIBO & Cognitive Stack** ⭐ - BPC-157 + Epitalon + Selank + Semax
10. **Phase 1: Foundation Stack**
11. **Phase 2: GH + Longevity**
12. **Phase 3 Option A: Retatrutide**
13. **Phase 3 Option B: K-Low**
14. **Tier 1: Bang for Buck**
15. **Tier 2: Supporting Stack**

## 📁 Project Structure

```
.
├── outputs/
│   ├── peptide-protocols-app.html          # 🌐 Interactive web application
│   ├── README.md                            # Full documentation
│   ├── PROJECT_SUMMARY.md                   # Project overview
│   ├── peptide_inventory_summary.csv        # Inventory tracking
│   ├── peptide_orders.csv                   # Order history
│   └── peptide_protocols/
│       ├── peptides/                        # 14 individual peptide JSON files
│       ├── stacks/                          # 15 stack protocol JSON files
│       ├── peptides_database.json           # Complete peptides database
│       ├── stacks_database.json             # Complete stacks database
│       └── dosing_guides.json               # Dosing guidelines
├── audit.jsonl                              # Development audit log
└── Peptide stacks for performance and recovery _ Claude.mhtml
```

## 🎯 Featured Stack

### Best Bang-for-Buck: Ultimate Longevity, SIBO & Cognitive Stack

This stack is recommended for comprehensive health optimization:

- **BPC-157** (oral, 250-500mcg 2x daily) - Gut repair, SIBO treatment
- **Epitalon** (5-10mg daily, 10-20 day cycles, 2-3x/year) - Telomerase activation
- **Selank** (250-500mcg 1-2x daily, intranasal) - Anxiety management
- **Semax** (300-600mcg 1-2x daily, intranasal) - Cognitive enhancement

**Why this stack?**
- ✅ Addresses longevity, gut health (SIBO), and cognitive enhancement
- ✅ All relatively accessible and affordable
- ✅ Well-researched peptides
- ✅ Complementary mechanisms

## 🔧 Using the Data

### JavaScript/Node.js

```javascript
const peptides = require('./outputs/peptide_protocols/peptides_database.json');
const stacks = require('./outputs/peptide_protocols/stacks_database.json');

// Get BPC-157 data
const bpc = peptides.bpc157;
console.log(bpc.dosing); // "250-500mcg, 1-2x daily"

// Get longevity stack
const longevityStack = stacks.longevity;
console.log(longevityStack.peptides); // ["pinealon", "epitalon", "thymulin"]
```

### Python

```python
import json

with open('outputs/peptide_protocols/peptides_database.json') as f:
    peptides = json.load(f)

with open('outputs/peptide_protocols/stacks_database.json') as f:
    stacks = json.load(f)

# Access data
bpc = peptides['bpc157']
print(bpc['primary_benefits'])
```

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
  "ordered": true|false,
  "order_status": "Status description"
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

## 🎨 Web App Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Search & Filter** - Find peptides by name, category, or type
- **Order Status Tracking** - Visual indicators for ordered vs discussed peptides
- **Cost Tier Labels** - Low/medium/high cost indicators
- **Interactive Navigation** - Smooth transitions between views
- **Detailed Protocols** - Complete dosing and timing information
- **Stack Analysis** - View which stacks are fully ordered and ready to run

## 🛠️ Technology Stack

- **Frontend**: React 18 (CDN)
- **Styling**: Tailwind CSS (CDN)
- **Data Format**: JSON
- **No Build Process**: Runs directly in browser
- **Offline Capable**: Works offline after initial load

## ⚠️ Important Disclaimers

1. **Educational Purpose Only**: This information is for educational and research purposes only.

2. **Consult Healthcare Providers**: Always consult with a qualified healthcare provider before starting any peptide protocol.

3. **Research Status**: Many peptides are research compounds and not FDA-approved for the uses described.

4. **Individual Variation**: Responses to peptides vary significantly between individuals.

5. **Quality Matters**: Peptide quality and purity vary significantly between suppliers.

## 📖 Documentation

- **[README.md](outputs/README.md)** - Complete project documentation
- **[PROJECT_SUMMARY.md](outputs/PROJECT_SUMMARY.md)** - Quick start guide
- **[FINAL_UPDATE.md](outputs/FINAL_UPDATE.md)** - Latest updates and changes

## 🔄 Future Enhancements

Planned additions for future versions:

- [ ] Safety profiles and contraindications
- [ ] Drug interactions database
- [ ] Side effects tracking
- [ ] Cost comparison tools
- [ ] Supplier directory
- [ ] Research paper references
- [ ] User experience tracking
- [ ] Stack customization tool
- [ ] Dosing calculators
- [ ] Reconstitution guides

## 📊 Project Statistics

- **Total Peptides**: 14
- **Total Stacks**: 15
- **JSON Files**: 31
- **Documentation Files**: 8
- **Lines of Code**: 137,487+
- **Categories Covered**: 8

## 🤝 Contributing

This project is for personal educational use. If you'd like to suggest additions or corrections:

1. Review the JSON schema
2. Ensure data accuracy and sources
3. Maintain consistent formatting
4. Update both individual files and database files

## 📝 License

This is an educational resource. Individual use of peptides should be guided by qualified medical professionals.

---

**Last Updated**: February 2026
**Version**: 1.0
**Maintained by**: [mrleepee](https://github.com/mrleepee)

For questions or suggestions, consult with qualified healthcare providers and peptide researchers.
