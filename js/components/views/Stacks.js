// Stacks.js - Stack card grid
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA, STACKS_DATA } = window.APP;

// Register the component on window.APP
window.APP.Stacks = function Stacks({ navigate }) {
  return window.html`
    <div className="grid md:grid-cols-2 gap-6">
      ${Object.values(STACKS_DATA).map(stack => window.html`
        <div key=${stack.id} className=${`card bg-white rounded-lg shadow-md p-6 cursor-pointer border-2 ${
          stack.stack_status === 'All peptides ordered' ? 'border-green-200' : 'border-purple-200'
        }`}
             onClick=${() => navigate('stack-detail', stack)}>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-gray-800">${stack.name}</h3>
            ${stack.stack_status === 'All peptides ordered' && window.html`
              <span className="ordered-badge badge">ALL ORDERED</span>
            `}
          </div>
          <p className="text-gray-600 mb-4">${stack.mechanism}</p>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Peptides:</p>
            <div className="flex flex-wrap gap-2">
              ${stack.peptides.map(pid => {
                const p = PEPTIDES_DATA[pid];
                return window.html`
                  <span key=${pid} className=${`badge ${p?.ordered ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                    ${p?.name}
                  </span>
                `;
              })}
            </div>
          </div>
        </div>
      `)}
    </div>
  `;
};
