// Header.js - Gradient header with title and counts
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope

// Register the component on window.APP
window.APP.Header = function Header({ orderedCount, ofInterestCount }) {
  return window.html`
    <header className="gradient-bg text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold">Peptide Protocols & Stacks</h1>
        <p className="mt-2 text-purple-100">Your personalized peptide database - ${orderedCount} ordered, ${ofInterestCount} of interest</p>
      </div>
    </header>
  `;
};
