// PeptideDetail.js - Full peptide page with scientific deep dive
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA, ARTICLES_DATA } = window.APP;
var { getCostColor } = window.APP.helpers;

// Register the component on window.APP
window.APP.PeptideDetail = function PeptideDetail({ peptide, navigate }) {
  if (!peptide) return window.html`<div>No peptide selected</div>`;

  return window.html`
    <div>
      <button onClick=${() => navigate('peptides')}
              className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        ← Back to Peptides
      </button>
      <div className=${`bg-white rounded-lg shadow-lg p-8 border-l-4 ${peptide.ordered ? 'border-green-500' : 'border-purple-500'}`}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">${peptide.name}</h2>
            <p className="text-lg text-purple-600 mt-1">${peptide.type}</p>
          </div>
          <div className="flex flex-col gap-2">
            ${peptide.ordered
              ? window.html`<span className="ordered-badge badge text-lg">ORDERED</span>`
              : window.html`<span className="discussed-badge badge text-lg">DISCUSSED ONLY</span>`
            }
            <span className="badge text-lg ${getCostColor(peptide.cost_tier)}">
              ${peptide.cost_tier} cost
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Protocol Reference</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-blue-700 mb-2">Dosing</h4>
              <p className="text-gray-800 font-semibold">${peptide.dosing}</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-blue-700 mb-2">Administration</h4>
              <p className="text-gray-800 font-semibold">${peptide.administration}</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-blue-700 mb-2">Half-Life</h4>
              <p className="text-gray-800 font-semibold">${peptide.half_life}</p>
            </div>
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-blue-700 mb-2">Category</h4>
              <p className="text-gray-800 font-semibold">${peptide.category}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Mechanism of Action</h3>
          <p className="text-gray-600">${peptide.mechanism}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Primary Benefits</h3>
          <ul className="space-y-2">
            ${peptide.primary_benefits.map((benefit, idx) => window.html`
              <li key=${idx} className="text-gray-600">• ${benefit}</li>
            `)}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Research Findings</h3>
          <p className="text-gray-600">${peptide.research_findings}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">System Targets</h3>
          <div className="flex flex-wrap gap-2">
            ${peptide.system_targets.map(target => window.html`
              <span key=${target} className="badge bg-purple-100 text-purple-800">
                ${target}
              </span>
            `)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Accessibility</h3>
            <p className="text-gray-600">${peptide.accessibility}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Status</h3>
            <p className="text-gray-600">${peptide.order_status}</p>
          </div>
        </div>

        ${peptide.special_notes && window.html`
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 font-semibold">Special Notes</p>
            <p className="text-yellow-700 mt-1">${peptide.special_notes}</p>
          </div>
        `}

        ${ARTICLES_DATA[peptide.id] && window.html`
          <div className="mt-8 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-300 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-blue-500 pb-3">
              Scientific Deep Dive
            </h2>

            ${(() => {
              const article = ARTICLES_DATA[peptide.id];
              return window.html`
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-900">${article.title}</h3>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold text-slate-800 mb-3">Executive Summary</h4>
                    <p className="text-gray-700 leading-relaxed">${article.executive_summary}</p>
                  </div>

                  ${article.mechanism_detailed && window.html`
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800">Detailed Mechanisms</h4>
                      ${article.mechanism_detailed.map((mech, idx) => window.html`
                        <div key=${idx} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                          <h5 className="font-bold text-green-800 mb-2">${mech.heading}</h5>
                          <p className="text-gray-700 text-sm leading-relaxed">${mech.content}</p>
                          ${mech.protein_links && mech.protein_links.length > 0 && window.html`
                            <div className="mt-2 flex flex-wrap gap-2">
                              ${mech.protein_links.map((link, lidx) => window.html`
                                <a key=${lidx} href=${link.url} target="_blank" rel="noopener noreferrer"
                                   className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs hover:bg-blue-200">
                                  ${link.term}
                                </a>
                              `)}
                            </div>
                          `}
                        </div>
                      `)}
                    </div>
                  `}

                  ${article.research_highlights && window.html`
                    <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                      <h4 className="text-lg font-bold text-purple-800 mb-4">Research Highlights</h4>
                      <ul className="space-y-2">
                        ${article.research_highlights.map((highlight, idx) => window.html`
                          <li key=${idx} className="flex items-start text-gray-700">
                            <span className="text-purple-600 font-bold mr-3">•</span>
                            <span>${highlight}</span>
                          </li>
                        `)}
                      </ul>
                    </div>
                  `}

                  ${article.applications && window.html`
                    <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                      <h4 className="text-lg font-bold text-orange-800 mb-4">Clinical Applications</h4>
                      <ul className="space-y-2">
                        ${article.applications.map((app, idx) => window.html`
                          <li key=${idx} className="flex items-start text-gray-700">
                            <span className="text-orange-600 font-bold mr-3">•</span>
                            <span>${app}</span>
                          </li>
                        `)}
                      </ul>
                    </div>
                  `}

                  ${article.safety_considerations && window.html`
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-800 mb-4">Safety Considerations</h4>
                      <p className="text-gray-700 mb-3">${article.safety_considerations}</p>
                    </div>
                  `}

                  ${article.safety_profile && window.html`
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-800 mb-4">Safety Profile</h4>
                      <p className="text-gray-700 mb-3">${article.safety_profile.description}</p>
                      <ul className="space-y-1">
                        ${article.safety_profile.considerations.map((c, idx) => window.html`
                          <li key=${idx} className="text-sm text-gray-700">• ${c}</li>
                        `)}
                      </ul>
                    </div>
                  `}

                  ${article.references && article.references.length > 0 && window.html`
                    <div className="bg-white rounded-lg p-6 border-l-4 border-slate-500">
                      <h4 className="text-lg font-bold text-slate-800 mb-4">Key References</h4>
                      <ul className="space-y-2">
                        ${article.references.slice(0, 5).map((ref, idx) => window.html`
                          <li key=${idx} className="text-sm text-gray-700">
                            <a href=${ref.url} target="_blank" rel="noopener noreferrer"
                               className="text-blue-600 hover:underline">
                              ${ref.text}
                            </a>
                          </li>
                        `)}
                      </ul>
                    </div>
                  `}
                </div>
              `;
            })()}
          </div>
        `}
      </div>
    </div>
  `;
};
