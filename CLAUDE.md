# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-page interactive web application** for peptide protocols and stacks research. The app is a standalone HTML file with no build process or server dependencies - it runs directly in the browser using React 18 and Tailwind CSS loaded via CDN.

**Main Application:** `outputs/peptide-protocols-app.html`

## Running the Application

```bash
# Simply open the HTML file in any modern browser
open outputs/peptide-protocols-app.html
# or double-click the file
```

No build, install, or server required. Works offline after initial CDN load.

## Architecture

### Single-File Structure
The entire application is contained in `peptide-protocols-app.html` (~3500 lines):
- React 18 (CDN, production build)
- Tailwind CSS (CDN)
- Heroicons (CDN)
- Babel standalone for JSX compilation in-browser
- All peptide data embedded as inline JSON

### Application Views
The app uses a simple `view` state variable to switch between:
- `peptides` - Browse all peptides with search/filter
- `stacks` - View protocol stacks
- `dosing` - Dosing guides
- `calculator` - Reconstitution calculator (v2.0 feature)

### Data Sources
All data is sourced from `outputs/peptide_protocols/`:
- `peptides_database.json` - Complete peptides data (embedded in HTML)
- `stacks_database.json` - Complete stacks data (embedded in HTML)
- `dosing_guides.json` - Detailed reconstitution and dosing info
- `peptides/*.json` - Individual peptide files (21 files)
- `stacks/*.json` - Individual stack protocol files (15 files)

**Important:** When updating data, you must update both the JSON files AND the embedded `PEPTIDES_DATA` and `STACKS_DATA` constants in the HTML file.

## Data Schemas

### Peptide Object
```json
{
  "id": "unique_identifier",
  "name": "Peptide Name",
  "type": "Classification type",
  "category": "Growth Hormone|Repair & Recovery|Aesthetic|Metabolic|Longevity|Cognitive|Anti-Inflammatory|Antimicrobial",
  "mechanism": "Mechanism of action description",
  "half_life": "Biological half-life",
  "dosing": "Research dosing protocol",
  "administration": "Route of administration",
  "primary_benefits": ["benefit1", "benefit2"],
  "research_findings": "Summary of research",
  "system_targets": ["system1", "system2"],
  "accessibility": "Availability status",
  "cost_tier": "low|medium|high",
  "special_notes": "Optional special considerations",
  "ordered": true|false,
  "order_status": "Status description"
}
```

### Stack Object
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
      "administration": "how to administer",
      "duration": "optional duration"
    }
  },
  "phase": "Optional phase identifier",
  "duration": "Protocol duration",
  "cycling": "Cycling protocol",
  "cost_estimate": "Optional cost string",
  "synergy_notes": "Why peptides work together",
  "considerations": ["consideration1", "consideration2"],
  "ordered": true|false,
  "stack_status": "Status description",
  "conversation_tier": "Optional tier classification"
}
```

## V2.0 Calculator Feature

The reconstitution calculator (lines 3264-3452) computes peptide solution concentrations:

**State Variables:**
```javascript
const [vialSize, setVialSize] = useState(5);        // 1-50mg
const [bacWater, setBacWater] = useState(2);        // 0.5-10mL
const [targetDose, setTargetDose] = useState(250);  // 50-20000mcg
```

**Calculations:**
```javascript
const concentration = (vialSize * 1000) / bacWater;        // mcg/mL
const volumePerDose = targetDose / concentration;          // mL
const unitsPerDose = volumePerDose * 100;                  // insulin syringe units
const dosesPerVial = bacWater / volumePerDose;             // total doses
```

**Quick Presets:** BPC-157, TB-500, Ipamorelin, Epitalon (lines 3403-3435)

## Modifying the Application

### Adding a New Peptide
1. Create `outputs/peptide_protocols/peptides/[new_id].json`
2. Update `outputs/peptide_protocols/peptides_database.json`
3. Add the peptide data to `PEPTIDES_DATA` constant in `peptide-protocols-app.html`
4. Optionally add dosing guide to `dosing_guides.json`

### Adding a New Stack
1. Create `outputs/peptide_protocols/stacks/[new_id].json`
2. Update `outputs/peptide_protocols/stacks_database.json`
3. Add the stack data to `STACKS_DATA` constant in `peptide-protocols-app.html`
4. Ensure all referenced peptides exist in the database

### Modifying Calculator
- Calculator state is at lines 2569-2571
- Navigation button at lines 2623-2626
- Full calculator view at lines 3264-3452
- **Verify calculations carefully** - medical dosing requires precision

## Styling Conventions

- Purple gradient theme: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Cards use hover effect: `card` class
- Badges: `ordered-badge` (green) for received peptides, `discussed-badge` (purple) for discussed
- Responsive breakpoints: `md:` for tablet, `lg:` for desktop

## Important Considerations

1. **Medical Content:** All data is for educational purposes only. Any modifications should maintain disclaimers and avoid giving medical advice.

2. **Data Consistency:** When updating peptides or stacks, always update both:
   - Individual JSON files in `peptide_protocols/`
   - Embedded constants in the HTML file

3. **Calculator Accuracy:** The calculator is a critical safety feature. Verify all mathematical changes with manual calculations.

4. **No Build Process:** Changes to `peptide-protocols-app.html` are immediately reflected upon browser refresh.

5. **Version 2.0 Status:** Current version includes 21 peptides (15 ordered, 6 discussed) and 15 stacks with the interactive calculator feature.
