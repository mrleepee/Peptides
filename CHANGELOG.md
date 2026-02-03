# Changelog - Peptide Protocols App

## Version 2.0 - February 2, 2026

### 🎉 Major Features Added

#### Interactive Reconstitution Calculator
A comprehensive dosing calculator that helps users accurately prepare peptide solutions:

**Features:**
- Real-time calculations for concentration, volume per dose, and doses per vial
- 11 quick preset buttons organized by vial size (5mg, 10mg, 20mg, 50mg)
- Intelligent syringe size recommendations:
  - Doses ≤0.1mL → Recommends 0.2mL (30-unit) syringe for accuracy
  - Doses >0.1mL → Recommends 1mL (100-unit) syringe
- Adjustable inputs: Vial Size (1-100mg), BAC Water (0.5-10mL), Target Dose (50-20,000mcg)
- Clear visual results with color-coded cards
- Help section explaining insulin syringe units and accuracy

**Technical Implementation:**
- Dual input controls (sliders + number fields) with synchronized state
- onBlur validation for smooth typing experience
- Responsive layout with Tailwind CSS
- No external dependencies - all calculations client-side

#### Complete Peptide Database
Added 3 missing ordered peptides with full scientific documentation:

**LL-37 (Antimicrobial Peptide)**
- Dosing: 200-500mcg daily or 2-3x weekly
- Immune modulation, antimicrobial defense
- Complete research articles and mechanisms

**DSIP (Delta Sleep-Inducing Peptide)**
- Dosing: 100-300mcg before bed, 3-4x weekly
- Sleep quality enhancement, stress reduction
- Full scientific literature and protocols

**AOD-9604 (Anti-Obesity Drug Fragment)**
- Dosing: 250-500mcg daily, fasted
- Fat metabolism, body composition
- Research findings and mechanisms

#### Enhanced UI/UX
- Molecular structure favicon (custom SVG)
- Professional icon system with Heroicons
- Improved navigation and scroll behavior
- Fixed all data structure inconsistencies

### 📊 Updated Statistics

**Total Peptides:** 21
- Ordered: 15
- Of Interest: 6

**Categories:**
- Growth Hormone Optimization (3)
- Repair & Recovery (3)
- Aesthetic & Skin Health (1)
- Metabolic & Energy (3)
- Longevity & Anti-Aging (4)
- Cognitive Enhancement (3)
- Anti-Inflammatory & Gut Health (2)
- Antimicrobial & Immune (2)

**Protocol Stacks:** 15
- Fully ordered: 6
- Contains peptides of interest: 9

### 🐛 Bug Fixes

1. **Target Dose Input Validation**
   - Fixed: Could not type values like "100" due to aggressive onChange validation
   - Solution: Moved validation to onBlur, allowing free typing

2. **Target Dose Maximum Limit**
   - Fixed: Limited to 2000mcg, couldn't enter higher doses (TB-500: 2500mcg, Epitalon: 10,000mcg)
   - Solution: Increased maximum to 20,000mcg

3. **Detail Pages for New Peptides**
   - Fixed: Blank pages when clicking certain peptides
   - Solution: Converted string data to array format for research_highlights and applications

4. **References Section Empty**
   - Fixed: "Key References" showed no content despite data existing
   - Solution: Changed ref.citation to ref.text to match data structure

5. **Scroll Position on Navigation**
   - Fixed: Page jumped to middle when navigating between views
   - Solution: Added useEffect hook to scroll to top on view changes

6. **Duplicate Data Entries**
   - Fixed: Duplicate mechanism_detailed entries causing display issues
   - Solution: Removed incorrectly formatted object-based entries

### 🔧 Technical Improvements

- Enhanced data validation and consistency across all peptide entries
- Improved form input handling with better UX patterns
- Optimized component rendering and state management
- Added comprehensive inline documentation
- Created backup system for safe iterations

### 📦 Commits in This Release

1. `cba5044` - feat: Add interactive reconstitution calculator
2. `c43fec6` - feat: Expand calculator presets to 11 organized by vial size
3. `ee176e1` - fix: Increase Target Dose maximum to 20,000mcg
4. `c7512d0` - feat: Add molecular structure favicon
5. `9c8495c` - feat: Add 3 missing ordered peptides (LL-37, DSIP, AOD-9604)
6. `3bc0796` - fix: Remove duplicate mechanism_detailed entries
7. `2c9dce8` - fix: Move Target Dose validation to onBlur
8. `6e4c4d6` - feat: Add intelligent syringe size recommendations

### 🚀 Usage

Open `outputs/peptide-protocols-app.html` in any modern browser. The calculator is accessible from the main navigation under "Dosing Calculator".

### ⚠️ Important Notes

- Always consult healthcare providers before using peptides
- Calculator provides guidance only - verify all calculations
- Peptide quality varies significantly between suppliers
- Use appropriate syringe sizes for accurate dosing

---

**Previous Version:** 1.0 (January 31, 2026)
**Current Version:** 2.0 (February 2, 2026)
**Lines of Code:** 3,500+ (main app)
**Total Project Size:** 14,000+ lines across all files
