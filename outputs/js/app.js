// Main App Component - Router and State Management
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope

// Access all registered components
var { Header, Nav, Footer } = window.APP;
var { Home, Peptides, PeptideDetail, Stacks, StackDetail, Dosing, Calculator } = window.APP;
var { PEPTIDES_DATA, STACKS_DATA } = window.APP;

// Main App Component
window.APP.App = function App() {
  const [view, setView] = useState('home');
  const [selectedPeptide, setSelectedPeptide] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Calculate counts for Header and Footer
  const orderedCount = Object.values(PEPTIDES_DATA).filter(p => p.ordered).length;
  const discussedCount = Object.values(PEPTIDES_DATA).filter(p => !p.ordered).length;
  const peptidesCount = Object.keys(PEPTIDES_DATA).length;
  const stacksCount = Object.keys(STACKS_DATA).length;

  // Navigation helper - encapsulates state changes
  const navigate = function(target, params) {
    params = params || {};
    // Handle both { peptide: obj } and direct peptide object
    if (params.peptide) {
      setSelectedPeptide(params.peptide);
    } else if (params.stack) {
      setSelectedStack(params.stack);
    } else if (params.id && params.name) {
      // Direct peptide object passed
      setSelectedPeptide(params);
    } else if (params.id && params.peptides) {
      // Direct stack object passed
      setSelectedStack(params);
    }
    setView(target);
  };

  // Render the current view
  const renderView = function() {
    switch(view) {
      case 'home':
        return window.html`<${Home} navigate=${navigate} />`;
      case 'peptides':
        return window.html`<${Peptides} navigate=${navigate} />`;
      case 'peptide-detail':
        return selectedPeptide && window.html`<${PeptideDetail} peptide=${selectedPeptide} navigate=${navigate} />`;
      case 'stacks':
        return window.html`<${Stacks} navigate=${navigate} />`;
      case 'stack-detail':
        return selectedStack && window.html`<${StackDetail} stack=${selectedStack} navigate=${navigate} />`;
      case 'dosing':
        return window.html`<${Dosing} navigate=${navigate} />`;
      case 'calculator':
        return window.html`<${Calculator} />`;
      default:
        return window.html`<${Home} navigate=${navigate} />`;
    }
  };

  return window.html`
    <div className="min-h-screen">
      <${Header} orderedCount=${orderedCount} discussedCount=${discussedCount} />
      <${Nav} view=${view} setView=${setView}
              peptidesCount=${peptidesCount}
              stacksCount=${stacksCount} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        ${renderView()}
      </main>
      <${Footer} orderedCount=${orderedCount} discussedCount=${discussedCount} />
    </div>
  `;
};

// Boot the application
ReactDOM.createRoot(document.getElementById('root')).render(
  window.html`<${window.APP.App} />`
);
