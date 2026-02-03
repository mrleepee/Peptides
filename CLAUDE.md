# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **interactive web application** for peptide protocols and stacks research. The app runs directly in the browser using React 18 and Tailwind CSS loaded via CDN, with **no build process or server dependencies**. It uses htm for JSX-like syntax without Babel.

**Main Application:** `outputs/peptide-protocols-app.html`

## Running the Application

```bash
# Simply open the HTML file in any modern browser
open outputs/peptide-protocols-app.html
# or double-click the file
```

No build, install, or server required. Works offline after initial CDN load. Works via `file://` protocol.

## Architecture

### Multi-File Structure (Post-Refactoring)

The application has been refactored from a monolithic HTML file into a modular structure:

```
outputs/
├── peptide-protocols-app.html         # HTML shell (~50 lines)
├── css/
│   └── app.css                        # Custom styles (7 CSS rules)
└── js/
    ├── vendor/
    │   └── htm.min.js                 # Vendored htm library
    ├── data/
    │   ├── peptides.js                # PEPTIDES_DATA (21 peptides)
    │   ├── articles.js                # ARTICLES_DATA (scientific articles)
    │   ├── stacks.js                  # STACKS_DATA (15 stacks)
    │   └── dosing.js                  # DOSING_GUIDES (dosing info)
    ├── utils/
    │   └── helpers.js                 # getCostColor() utility
    ├── components/
    │   ├── Header.js                  # Gradient header
    │   ├── Nav.js                     # Navigation tabs
    │   ├── Footer.js                  # Disclaimer footer
    │   └── views/
    │       ├── Home.js                # Dashboard
    │       ├── Peptides.js            # Browse with search/filters
    │       ├── PeptideDetail.js       # Full peptide page + articles
    │       ├── Stacks.js              # Stack grid
    │       ├── StackDetail.js         # Stack protocol details
    │       ├── Dosing.js              # Dosing guides
    │       └── Calculator.js          # Reconstitution calculator
    └── app.js                         # Main App router + boot
```

### Technology Stack
- **React 18** (CDN, production build)
- **ReactDOM 18** (CDN)
- **htm** - Tagged template literals for JSX-like syntax without Babel
- **Tailwind CSS** (CDN)

### Script Load Order (in HTML)
1. React 18 CDN
2. ReactDOM 18 CDN
3. Tailwind CSS CDN
4. `css/app.css` (custom styles)
5. `js/vendor/htm.min.js`
6. `window.html = window.htm.bind(React.createElement);`
7. Data files (peptides.js, articles.js, stacks.js, dosing.js)
8. Utils (helpers.js)
9. Components (Header.js, Nav.js, Footer.js, views/*)
10. Main app (app.js)

### Application Views
The app uses a `view` state variable to switch between:
- `home` - Dashboard with stats and quick access
- `peptides` - Browse all peptides with search/filter
- `peptide-detail` - Full peptide information + scientific articles
- `stacks` - View protocol stacks
- `stack-detail` - Stack protocol details
- `dosing` - Dosing guides
- `calculator` - Reconstitution calculator

### Data Sources
All data is sourced from `outputs/peptide_protocols/`:
- `peptides_database.json` - Source for peptides.js
- `stacks_database.json` - Source for stacks.js
- `dosing_guides.json` - Source for dosing.js
- `peptides/*.json` - Individual peptide files (21 files)
- `stacks/*.json` - Individual stack protocol files (15 files)

**Important:** When updating data, update the JSON files in `peptide_protocols/` AND the corresponding `js/data/*.js` file.

### Component Architecture

**State Management:**
- `app.js` manages global state: `view`, `selectedPeptide`, `selectedStack`
- `navigate(target, params)` function handles navigation
- Components use local state for their specific needs (filters, selections)

**Data Access:**
- All data accessed via `window.APP` namespace
- Components destructure what they need: `var { PEPTIDES_DATA } = window.APP;`
- Use `var` not `const` at top level (global scope limitation)

**htm Syntax:**
- Use `window.html` instead of `html` for template literals
- Components: `` window.html`<${Component} prop=${value} />` ``
- Event handlers: `onClick=${() => handler()}`
- Maps: `` ${arr.map(x => window.html`<div key=${x.id}>...</div>`)} ``

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

## Calculator Feature

The reconstitution calculator (`js/components/views/Calculator.js`) computes peptide solution concentrations:

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

**Quick Presets:** BPC-157, TB-500, Ipamorelin, Epitalon

## Modifying the Application

### Adding a New Peptide
1. Create `outputs/peptide_protocols/peptides/[new_id].json`
2. Update `outputs/peptide_protocols/peptides_database.json`
3. Update `outputs/js/data/peptides.js` (add to `PEPTIDES_DATA` object)
4. Optionally add dosing guide to `dosing_guides.json` and `js/data/dosing.js`

### Adding a New Stack
1. Create `outputs/peptide_protocols/stacks/[new_id].json`
2. Update `outputs/peptide_protocols/stacks_database.json`
3. Update `outputs/js/data/stacks.js` (add to `STACKS_DATA` object)
4. Ensure all referenced peptides exist in the database

### Adding a New Component
1. Create component file in appropriate directory:
   - `js/components/` for shared components (Header, Nav, Footer)
   - `js/components/views/` for view components
2. Use this pattern:
```javascript
var { useState, useEffect } = React;

window.APP.ComponentName = function ComponentName({ prop1, prop2 }) {
  // Local state with useState
  const [localState, setLocalState] = useState(null);

  return window.html`
    <div className="...">
      <!-- content -->
    </div>
  `;
};
```
3. Add script tag to `peptide-protocols-app.html` before `js/app.js`
4. Import in `app.js`: `var { ComponentName } = window.APP;`

### Modifying Calculator
- Calculator is in `js/components/views/Calculator.js`
- All state is local to the component
- **Verify calculations carefully** - medical dosing requires precision

## Styling Conventions

- Purple gradient theme: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Custom styles in `css/app.css`:
  - `.gradient-bg` - Header background
  - `.card` - Card containers with hover effect
  - `.badge` - Base badge style
  - `.ordered-badge` - Green gradient for ordered peptides
  - `.of-interest-badge` - Purple gradient for peptides of interest
- Responsive breakpoints: `md:` for tablet, `lg:` for desktop

## Important Considerations

1. **Medical Content:** All data is for educational purposes only. Any modifications should maintain disclaimers and avoid giving medical advice.

2. **Data Consistency:** When updating peptides or stacks, always update both:
   - JSON files in `peptide_protocols/`
   - JavaScript files in `js/data/`

3. **Calculator Accuracy:** The calculator is a critical safety feature. Verify all mathematical changes with manual calculations.

4. **No Build Process:** Changes to `.js` files are immediately reflected upon browser refresh.

5. **Global Scope Limitations:** Use `var` not `const`/`let` for top-level destructuring. Use `window.html` not `html` for template literals.

6. **htm Library:** Vendored in `js/vendor/htm.min.js`. Source: https://unpkg.com/htm@3.1.1/dist/htm.js

7. **Version 2.0 Status:** Current version includes 21 peptides (15 ordered, 6 of interest) and 15 stacks with the interactive calculator feature.

## Troubleshooting

**Click handlers not working:**
- Ensure `navigate` function is passed as a prop
- Check that event handlers use `onClick` not `onclick`
- Verify htm syntax: `` onClick=${() => handler()} ``

**Const redeclaration errors:**
- Use `var` for top-level destructuring: `var { useState } = React;`
- Use `window.html` instead of destructuring `const { html } = window;`

**Components not rendering:**
- Check script load order in HTML file
- Verify component is registered on `window.APP`
- Ensure imports in `app.js`: `var { ComponentName } = window.APP;`
