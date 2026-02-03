// StackDetail.js - Full stack page with protocol table
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA } = window.APP;

// Register the component on window.APP
window.APP.StackDetail = function StackDetail({ stack, navigate }) {
  if (!stack) return window.html`<div>No stack selected</div>`;

  return window.html`
    <div>
      <button onClick=${() => navigate('stacks')}
              className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        ← Back to Stacks
      </button>
      <div className=${`bg-white rounded-lg shadow-lg p-8 border-l-4 ${
        stack.stack_status === 'All peptides ordered' ? 'border-green-500' : 'border-purple-500'
      }`}>
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-gray-800">${stack.name}</h2>
          ${stack.stack_status === 'All peptides ordered' && window.html`
            <span className="ordered-badge badge text-lg">ALL ORDERED</span>
          `}
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Peptides in This Stack</h3>
          <div className="flex flex-wrap gap-2">
            ${stack.peptides.map(pid => {
              const p = PEPTIDES_DATA[pid];
              return window.html`
                <span key=${pid}
                      className=${`badge text-lg cursor-pointer ${p?.ordered ? 'ordered-badge' : 'discussed-badge'}`}
                      onClick=${() => navigate('peptide-detail', p)}>
                  ${p?.name}
                </span>
              `;
            })}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Primary Goals</h3>
          <ul className="space-y-2">
            ${stack.primary_goals.map((goal, idx) => window.html`
              <li key=${idx} className="text-gray-600">• ${goal}</li>
            `)}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Mechanism & Synergy</h3>
          <p className="text-gray-600 mb-3">${stack.mechanism}</p>
          <p className="text-gray-600 italic">${stack.synergy_notes}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3">Protocol Details</h3>
          <div className="space-y-4">
            ${Object.entries(stack.protocol).map(([peptideId, details]) => window.html`
              <div key=${peptideId} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">
                  ${PEPTIDES_DATA[peptideId]?.name || peptideId}
                </h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  ${Object.entries(details).map(([key, value]) => window.html`
                    <div key=${key}>
                      <span className="font-medium text-gray-700 capitalize">
                        ${key.replace(/_/g, ' ')}:
                      </span>
                      <span className="text-gray-600 ml-2">${value}</span>
                    </div>
                  `)}
                </div>
              </div>
            `)}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Cycling Protocol</h3>
          <p className="text-gray-600">${stack.cycling}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Considerations</h3>
          <ul className="space-y-2">
            ${stack.considerations.map((consideration, idx) => window.html`
              <li key=${idx} className="text-gray-600">• ${consideration}</li>
            `)}
          </ul>
        </div>

        ${stack.special_notes && window.html`
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800 font-semibold">Special Notes</p>
            <p className="text-yellow-700 mt-1">${stack.special_notes}</p>
          </div>
        `}
      </div>
    </div>
  `;
};
