// Home.js - Dashboard view with stats cards and grids
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA, STACKS_DATA } = window.APP;
var { getCostColor } = window.APP.helpers;

// Register the component on window.APP
window.APP.Home = function Home({ navigate }) {
  const orderedCount = Object.values(PEPTIDES_DATA).filter(p => p.ordered).length;
  const discussedCount = Object.values(PEPTIDES_DATA).filter(p => !p.ordered).length;

  return window.html`
    <div>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Peptide Protocol Database</h2>
        <p className="text-gray-600 mb-4">
          Based on your conversation and orders, this database covers ${Object.keys(PEPTIDES_DATA).length} peptides and ${Object.keys(STACKS_DATA).length} protocol stacks.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-2">${orderedCount} Ordered</h3>
            <p className="text-gray-600">Peptides you purchased</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">${discussedCount} Discussed</h3>
            <p className="text-gray-600">For future consideration</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">${Object.keys(STACKS_DATA).length} Stacks</h3>
            <p className="text-gray-600">Synergistic protocols</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-2">Evidence-Based</h3>
            <p className="text-gray-600">Research-backed info</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Peptides You Ordered</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${Object.values(PEPTIDES_DATA).filter(p => p.ordered).map(peptide => window.html`
            <div key=${peptide.id} className="card bg-white rounded-lg shadow-md p-4 cursor-pointer border-2 border-green-200"
                 onClick=${() => navigate('peptide-detail', peptide)}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-gray-800">${peptide.name}</h4>
                <span className="ordered-badge badge text-xs">ORDERED</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">${peptide.category}</p>
              <span className="badge text-xs ${getCostColor(peptide.cost_tier)}">
                ${peptide.cost_tier}
              </span>
            </div>
          `)}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">Discussed for Future</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        ${Object.values(PEPTIDES_DATA).filter(p => !p.ordered).map(peptide => window.html`
          <div key=${peptide.id} className="card bg-white rounded-lg shadow-md p-4 cursor-pointer border-2 border-purple-200"
               onClick=${() => navigate('peptide-detail', peptide)}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-gray-800">${peptide.name}</h4>
              <span className="discussed-badge badge text-xs">DISCUSSED</span>
            </div>
            <p className="text-xs text-gray-600">${peptide.category}</p>
          </div>
        `)}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">Recommended Stacks (Using Your Ordered Peptides)</h3>
      <div className="grid md:grid-cols-2 gap-6">
        ${Object.values(STACKS_DATA).filter(s => s.stack_status === "All peptides ordered").slice(0, 4).map(stack => window.html`
          <div key=${stack.id} className="card bg-white rounded-lg shadow-md p-6 cursor-pointer border-2 border-green-200"
               onClick=${() => navigate('stack-detail', stack)}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-gray-800">${stack.name}</h4>
              <span className="ordered-badge badge">ALL ORDERED</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">${stack.mechanism.substring(0, 150)}...</p>
            <div className="flex flex-wrap gap-2 mb-3">
              ${stack.peptides.map(pid => window.html`
                <span key=${pid} className="badge bg-green-100 text-green-800 text-xs">
                  ${PEPTIDES_DATA[pid]?.name}
                </span>
              `)}
            </div>
          </div>
        `)}
      </div>
    </div>
  `;
};
