// Nav.js - Navigation tabs for different views
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope

// Register the component on window.APP
window.APP.Nav = function Nav({ view, setView, peptidesCount, stacksCount }) {
  return window.html`
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 py-4">
          <button onClick=${() => setView('home')} className=${`px-4 py-2 rounded-lg font-medium ${view === 'home' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
            Home
          </button>
          <button onClick=${() => setView('peptides')} className=${`px-4 py-2 rounded-lg font-medium ${view === 'peptides' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
            All Peptides (${peptidesCount})
          </button>
          <button onClick=${() => setView('stacks')} className=${`px-4 py-2 rounded-lg font-medium ${view === 'stacks' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
            Protocol Stacks (${stacksCount})
          </button>
          <button onClick=${() => setView('dosing')} className=${`px-4 py-2 rounded-lg font-medium ${view === 'dosing' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
            Dosing Guides
          </button>
          <button onClick=${() => setView('calculator')} className=${`px-4 py-2 rounded-lg font-medium ${view === 'calculator' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
            Calculator
          </button>
        </div>
      </div>
    </nav>
  `;
};
