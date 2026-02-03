// Footer.js - Disclaimer footer
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope

// Register the component on window.APP
window.APP.Footer = function Footer({ orderedCount, discussedCount }) {
  return window.html`
    <footer className="bg-gray-800 text-white mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          This information is for educational and research purposes only.
          Always consult with a qualified healthcare provider before starting any peptide protocol.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Based on your orders and conversation • ${orderedCount} ordered, ${discussedCount} discussed • ${new Date().getFullYear()}
        </p>
      </div>
    </footer>
  `;
};
