// Dosing.js - Dosing guides selector
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA, DOSING_GUIDES } = window.APP;

// Register the component on window.APP
window.APP.Dosing = function Dosing() {
  // Local state
  const [selectedDosingGuide, setSelectedDosingGuide] = useState(null);

  return window.html`
    <div>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dosing & Administration Guide</h2>
        <p className="text-gray-600 mb-4">
          Comprehensive reconstitution calculator, dosing schedules, and synergistic supplement recommendations.
        </p>
      </div>

      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Select Peptide:</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          ${Object.values(PEPTIDES_DATA).filter(p => DOSING_GUIDES[p.id]).map(peptide => window.html`
            <button
              key=${peptide.id}
              onClick=${() => setSelectedDosingGuide(DOSING_GUIDES[peptide.id])}
              className=${`p-4 rounded-lg border-2 transition-all ${
                selectedDosingGuide?.peptide_id === peptide.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="font-bold text-gray-800">${peptide.name}</div>
              <div className="text-xs text-gray-600 mt-1">${peptide.category}</div>
            </button>
          `)}
        </div>
      </div>

      ${selectedDosingGuide && window.html`
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Reconstitution Calculator</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-700 mb-3">Vial Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">BAC Water:</span> ${selectedDosingGuide.reconstitution.bac_water}</p>
                  <p><span className="font-semibold">Vial Sizes:</span> ${selectedDosingGuide.vial_sizes.join(', ')}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-bold text-blue-700 mb-3">Concentrations</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Concentration:</span> ${selectedDosingGuide.reconstitution.concentration}</p>
                  ${selectedDosingGuide.vial_lasts && window.html`
                    <p className="text-xs text-gray-600 mt-2"><span className="font-semibold">Vial lasts:</span> ${selectedDosingGuide.vial_lasts}</p>
                  `}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow mb-6">
              <h4 className="font-bold text-blue-700 mb-4">Quick Dosing Reference</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">${selectedDosingGuide.vial_sizes[0]} Vial (in 2mL):</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    ${Object.entries(selectedDosingGuide.reconstitution.units_per_dose).map(([dose, units]) => window.html`
                      <div key=${dose} className="bg-blue-50 p-3 rounded border border-blue-200">
                        <span className="font-bold text-blue-800">${dose}:</span>
                        <span className="text-gray-700 ml-2">${units}</span>
                      </div>
                    `)}
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <span className="font-semibold">Typical dose range:</span> ${selectedDosingGuide.typical_dose_range}
                  </p>
                </div>
              </div>
            </div>

            ${selectedDosingGuide.reconstitution.note && window.html`
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800"><span className="font-bold">Note:</span> ${selectedDosingGuide.reconstitution.note}</p>
              </div>
            `}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Dosing Schedule & Protocol</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                <h4 className="font-bold text-green-800 mb-3">Frequency & Timing</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Dose Range:</span>
                    <p className="text-lg font-bold text-green-700">${selectedDosingGuide.typical_dose_range}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Frequency:</span>
                    <p className="text-gray-800">${selectedDosingGuide.frequency}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Timing:</span>
                    <ul className="text-gray-800 mt-1">
                      ${selectedDosingGuide.timing.map((t, idx) => window.html`
                        <li key=${idx}>• ${t}</li>
                      `)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-200">
                <h4 className="font-bold text-amber-800 mb-3">Protocol Details</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Schedule:</span>
                    <p className="text-gray-800">${selectedDosingGuide.weekly_schedule}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Cycling:</span>
                    <p className="text-gray-800">${selectedDosingGuide.cycling}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Route:</span>
                    <p className="text-gray-800">${selectedDosingGuide.administration_route}</p>
                  </div>
                </div>
              </div>
            </div>

            ${selectedDosingGuide.titration_schedule && window.html`
              <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-pink-800 mb-3">Titration Schedule</h4>
                <p className="text-gray-800">${selectedDosingGuide.titration_schedule}</p>
              </div>
            `}
          </div>

          ${selectedDosingGuide.synergistic_supplements && selectedDosingGuide.synergistic_supplements.length > 0 && window.html`
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Synergistic Supplements</h3>
              <div className="space-y-4">
                ${selectedDosingGuide.synergistic_supplements.map((supp, idx) => window.html`
                  <div key=${idx} className="border-l-4 border-purple-300 bg-purple-50 p-4 rounded">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-bold text-purple-800 text-lg">${supp.name}</h5>
                        <p className="text-purple-700 font-semibold mt-1">Dose: ${supp.dose}</p>
                        <p className="text-gray-700 mt-2">${supp.reason}</p>
                      </div>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          `}
        </div>
      `}
    </div>
  `;
};
