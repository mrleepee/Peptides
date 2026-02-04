// Calculator.js - Reconstitution calculator with presets
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope

// Register the component on window.APP
window.APP.Calculator = function Calculator() {
  // Local state
  const [vialSize, setVialSize] = useState(5);
  const [bacWater, setBacWater] = useState(2);
  const [targetDose, setTargetDose] = useState(250);

  return window.html`
    <div>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Reconstitution Calculator</h2>
        <p className="text-gray-600">
          Calculate peptide concentration, volume per dose, and units per insulin syringe for your reconstitution protocol.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Input Parameters</h3>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-700">Vial Size (mg)</label>
                <input
                  type="number"
                  value=${vialSize}
                  onInput=${(e) => setVialSize(Math.max(1, Math.min(50, parseFloat(e.target.value) || 1)))}
                  className="w-20 px-3 py-2 border border-purple-300 rounded-lg font-bold text-purple-600 text-lg"
                />
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="0.5"
                value=${vialSize}
                onInput=${(e) => setVialSize(parseFloat(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1mg</span>
                <span>50mg</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-700">BAC Water (mL)</label>
                <input
                  type="number"
                  value=${bacWater}
                  onInput=${(e) => setBacWater(Math.max(0.5, Math.min(10, parseFloat(e.target.value) || 0.5)))}
                  className="w-20 px-3 py-2 border border-purple-300 rounded-lg font-bold text-purple-600 text-lg"
                />
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value=${bacWater}
                onInput=${(e) => setBacWater(parseFloat(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5mL</span>
                <span>10mL</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-lg font-semibold text-gray-700">Target Dose (mcg)</label>
                <input
                  type="number"
                  value=${targetDose}
                  onInput=${(e) => setTargetDose(parseFloat(e.target.value) || 0)}
                  onBlur=${(e) => {
                    const val = parseFloat(e.target.value) || 50;
                    setTargetDose(Math.max(50, Math.min(20000, val)));
                  }}
                  className="w-24 px-3 py-2 border border-purple-300 rounded-lg font-bold text-purple-600 text-lg"
                />
              </div>
              <input
                type="range"
                min="50"
                max="20000"
                step="10"
                value=${targetDose}
                onInput=${(e) => setTargetDose(parseFloat(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50mcg</span>
                <span>20000mcg</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          ${(() => {
            const concentration = (vialSize * 1000) / bacWater;
            const volumePerDose = targetDose / concentration;
            const unitsPerDose = volumePerDose * 100;
            const dosesPerVial = bacWater / volumePerDose;

            return window.html`
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-6 border-2 border-purple-300">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Concentration</p>
                  <p className="text-4xl font-bold text-purple-700">${concentration.toFixed(1)}</p>
                  <p className="text-gray-600 text-sm mt-2">mcg/mL</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-2 border-blue-300">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Volume per Dose</p>
                  <p className="text-4xl font-bold text-blue-700">${volumePerDose.toFixed(3)}</p>
                  <p className="text-gray-600 text-sm mt-2">mL</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6 border-2 border-green-300">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Units per Dose (Insulin Syringe)</p>
                  <p className="text-4xl font-bold text-green-700">${unitsPerDose.toFixed(1)}</p>
                  <p className="text-gray-600 text-sm mt-2">units</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-6 border-2 border-orange-300">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Total Doses per Vial</p>
                  <p className="text-4xl font-bold text-orange-700">${dosesPerVial.toFixed(1)}</p>
                  <p className="text-gray-600 text-sm mt-2">doses</p>
                </div>

                ${(() => {
                  const recommendedSyringe = volumePerDose <= 0.1 ? "0.2mL (30-unit) syringe" : "1mL (100-unit) syringe";
                  const syringeNote = volumePerDose <= 0.1
                    ? "Small dose - use 0.2mL syringe for better accuracy"
                    : "Standard 1mL insulin syringe is fine";
                  return window.html`
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg shadow-md p-6 border-2 border-pink-300">
                      <p className="text-gray-600 text-sm font-semibold mb-1">Recommended Syringe</p>
                      <p className="text-3xl font-bold text-pink-700">${recommendedSyringe}</p>
                      <p className="text-gray-600 text-xs mt-2">${syringeNote}</p>
                    </div>
                  `;
                })()}

                ${(() => {
                  const recommendedSyringe = volumePerDose <= 0.1 ? "0.2mL syringe" : "1mL syringe";
                  return window.html`
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-yellow-800">Summary:</span> ${vialSize}mg vial in ${bacWater}mL gives ${concentration.toFixed(1)} mcg/mL. Each ${targetDose}mcg dose requires ${volumePerDose.toFixed(3)}mL (${unitsPerDose.toFixed(1)} units). Use a <span className="font-semibold text-pink-700">${recommendedSyringe}</span> for accurate measurement.
                      </p>
                    </div>
                  `;
                })()}
              </div>
            `;
          })()}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Presets</h3>
        <p className="text-gray-600 mb-8">Click a preset to quickly load common reconstitution protocols, organized by vial size:</p>

        {/* 5mg Vials Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-blue-700 mb-4 pb-2 border-b-2 border-blue-200">5mg Vials</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(250); }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">BPC-157</div>
              <div className="text-xs opacity-90">5mg • 2mL • 250mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(500); }}
              className="bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">KPV (500mcg)</div>
              <div className="text-xs opacity-90">5mg • 2mL • 500mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(1000); }}
              className="bg-gradient-to-br from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">KPV (1000mcg)</div>
              <div className="text-xs opacity-90">5mg • 2mL • 1000mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(100); }}
              className="bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Mod GRF 1-29</div>
              <div className="text-xs opacity-90">5mg • 2mL • 100mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(200); }}
              className="bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Ipamorelin</div>
              <div className="text-xs opacity-90">5mg • 2mL • 200mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(5); setBacWater(2); setTargetDose(2500); }}
              className="bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">TB-500</div>
              <div className="text-xs opacity-90">5mg • 2mL • 2.5mg</div>
            </button>
          </div>
        </div>

        {/* 10mg Vials Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-purple-700 mb-4 pb-2 border-b-2 border-purple-200">10mg Vials</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick=${() => { setVialSize(10); setBacWater(2); setTargetDose(10000); }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Epitalon</div>
              <div className="text-xs opacity-90">10mg • 2mL • 10mg</div>
            </button>

            <button
              onClick=${() => { setVialSize(10); setBacWater(2); setTargetDose(10000); }}
              className="bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">MOTS-c</div>
              <div className="text-xs opacity-90">10mg • 2mL • 10mg</div>
            </button>

            <button
              onClick=${() => { setVialSize(10); setBacWater(2); setTargetDose(600); }}
              className="bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Semax</div>
              <div className="text-xs opacity-90">10mg • 2mL • 600mcg</div>
            </button>

            <button
              onClick=${() => { setVialSize(10); setBacWater(2); setTargetDose(10000); }}
              className="bg-gradient-to-br from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Pinealon</div>
              <div className="text-xs opacity-90">10mg • 2mL • 10mg</div>
            </button>
          </div>
        </div>

        {/* 20mg Vials Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-green-700 mb-4 pb-2 border-b-2 border-green-200">20mg Vials</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick=${() => { setVialSize(20); setBacWater(2); setTargetDose(1000); }}
              className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">Thymulin</div>
              <div className="text-xs opacity-90">20mg • 2mL • 1mg</div>
            </button>
          </div>
        </div>

        {/* 50mg Vials Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-orange-700 mb-4 pb-2 border-b-2 border-orange-200">50mg Vials</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick=${() => { setVialSize(50); setBacWater(2); setTargetDose(2000); }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <div className="text-lg mb-2">GHK-Cu</div>
              <div className="text-xs opacity-90">50mg • 2mL • 2mg</div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
        <h4 className="font-bold text-blue-800 mb-3">How to Use This Calculator</h4>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• <span className="font-semibold">Vial Size:</span> The amount of peptide powder in your vial (in milligrams)</li>
          <li>• <span className="font-semibold">BAC Water:</span> The volume of bacteriostatic water you're adding to reconstitute</li>
          <li>• <span className="font-semibold">Target Dose:</span> The dose size you want to inject (in micrograms)</li>
          <li>• <span className="font-semibold">Concentration:</span> Total peptide per mL of reconstituted solution</li>
          <li>• <span className="font-semibold">Volume per Dose:</span> How many mL to draw for your target dose</li>
          <li>• <span className="font-semibold">Units per Dose:</span> How many units on a standard insulin syringe (100 units = 1mL)</li>
          <li>• <span className="font-semibold">Recommended Syringe:</span> For doses ≤0.1mL, use a 0.2mL (30-unit) syringe for 10x better accuracy than a 1mL syringe</li>
          <li>• <span className="font-semibold">Total Doses:</span> How many complete doses you can get from one vial</li>
        </ul>
      </div>
    </div>
  `;
};
