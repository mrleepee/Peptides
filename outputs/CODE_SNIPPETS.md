# Reconstitution Calculator - Code Snippets Reference

## State Variables Added (Lines 2569-2571)

```javascript
const [vialSize, setVialSize] = useState(5);
const [bacWater, setBacWater] = useState(2);
const [targetDose, setTargetDose] = useState(250);
```

## Navigation Button Added (Lines 2623-2626)

```jsx
<button onClick={() => setView('calculator')} 
        className={`px-4 py-2 rounded-lg font-medium ${view === 'calculator' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
    Calculator
</button>
```

## Input Control Example: Vial Size Slider (Lines 3278-3301)

```jsx
<div>
    <div className="flex justify-between items-center mb-3">
        <label className="text-lg font-semibold text-gray-700">Vial Size (mg)</label>
        <input
            type="number"
            value={vialSize}
            onChange={(e) => setVialSize(Math.max(1, Math.min(50, parseFloat(e.target.value) || 1)))}
            className="w-20 px-3 py-2 border border-purple-300 rounded-lg font-bold text-purple-600 text-lg"
        />
    </div>
    <input
        type="range"
        min="1"
        max="50"
        step="0.5"
        value={vialSize}
        onChange={(e) => setVialSize(parseFloat(e.target.value))}
        className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
    />
    <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>1mg</span>
        <span>50mg</span>
    </div>
</div>
```

## Calculation Logic (Lines 3356-3360)

```javascript
{(() => {
    const concentration = (vialSize * 1000) / bacWater;
    const volumePerDose = targetDose / concentration;
    const unitsPerDose = volumePerDose * 100;
    const dosesPerVial = bacWater / volumePerDose;
    
    return (
        // Output cards here
    );
})()}
```

## Output Card Example: Concentration (Lines 3364-3368)

```jsx
<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-6 border-2 border-purple-300">
    <p className="text-gray-600 text-sm font-semibold mb-1">Concentration</p>
    <p className="text-4xl font-bold text-purple-700">{concentration.toFixed(1)}</p>
    <p className="text-gray-600 text-sm mt-2">mcg/mL</p>
</div>
```

## Preset Button Example: BPC-157 (Lines 3404-3410)

```jsx
<button
    onClick={() => { setVialSize(5); setBacWater(2); setTargetDose(250); }}
    className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
>
    <div className="text-lg mb-2">BPC-157</div>
    <div className="text-xs opacity-90">5mg • 2mL • 250mcg</div>
</button>
```

## Key Tailwind Classes Used

### Gradient Backgrounds
- `gradient-to-br from-purple-50 to-purple-100` - Diagonal gradient
- `hover:from-blue-600 hover:to-blue-700` - Hover state
- `bg-purple-200` - Slider background

### Typography
- `text-4xl font-bold` - Large result numbers
- `text-lg font-semibold` - Labels
- `text-sm text-gray-600` - Helper text

### Layout
- `grid md:grid-cols-2 gap-8` - Two-column responsive
- `space-y-8` - Vertical spacing
- `flex justify-between items-center` - Aligned labels

### Interactive Elements
- `appearance-none cursor-pointer accent-purple-600` - Custom slider
- `transition-all transform hover:scale-105` - Hover effects
- `border-2 border-purple-300 rounded-lg` - Input styling

### Colors Used
- Purple (#667eea, #764ba2) - Primary theme
- Blue (#3b82f6, #2563eb) - Volume per dose
- Green (#10b981, #059669) - Units per dose
- Orange (#f59e0b, #d97706) - Doses per vial
- Yellow (#fbbf24, #f59e0b) - Summary/alerts

## Validation Logic

### Vial Size Validation
```javascript
Math.max(1, Math.min(50, parseFloat(e.target.value) || 1))
```
- Minimum: 1mg
- Maximum: 50mg
- Default: 1mg if empty

### BAC Water Validation
```javascript
Math.max(0.5, Math.min(10, parseFloat(e.target.value) || 0.5))
```
- Minimum: 0.5mL
- Maximum: 10mL
- Default: 0.5mL if empty

### Target Dose Validation
```javascript
Math.max(50, Math.min(2000, parseFloat(e.target.value) || 50))
```
- Minimum: 50mcg
- Maximum: 2000mcg
- Default: 50mcg if empty

## Number Formatting

```javascript
// Concentration: 1 decimal place
concentration.toFixed(1)        // e.g., "2500.0"

// Volume per dose: 3 decimal places
volumePerDose.toFixed(3)        // e.g., "0.100"

// Units per dose: 1 decimal place
unitsPerDose.toFixed(1)         // e.g., "10.0"

// Doses per vial: 1 decimal place
dosesPerVial.toFixed(1)         // e.g., "20.0"
```

## Responsive Breakpoints Used

- `md:grid-cols-2` - Medium screens (768px+): 2 columns
- `md:grid-cols-3 lg:grid-cols-4` - Presets: 3 on md, 4 on lg
- `gap-8` - Spacing between columns

## Color Scheme Summary

| Element | Color Class | Hex Value |
|---------|-------------|-----------|
| Primary Theme | purple | #667eea, #764ba2 |
| Concentration Card | purple-50/100 | Light purple |
| Volume Card | blue-50/100 | Light blue |
| Units Card | green-50/100 | Light green |
| Doses Card | orange-50/100 | Light orange |
| Summary Box | yellow-50 | Light yellow |
| Preset 1 (BPC-157) | blue-500/600 | Blue |
| Preset 2 (TB-500) | green-500/600 | Green |
| Preset 3 (Ipamorelin) | purple-500/600 | Purple |
| Preset 4 (Epitalon) | pink-500/600 | Pink |

