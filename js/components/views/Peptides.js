// Peptides.js - Browse view with search and filters
// Destructure React hooks and dependencies
var { useState, useEffect } = React;
// Access via window.html directly - no destructuring in global scope
var { PEPTIDES_DATA } = window.APP;
var { getCostColor } = window.APP.helpers;

// Register the component on window.APP
window.APP.Peptides = function Peptides({ navigate }) {
  // Local state
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterOrderStatus, setFilterOrderStatus] = useState('all');

  const categories = [...new Set(Object.values(PEPTIDES_DATA).map(p => p.category))];

  const filteredPeptides = Object.values(PEPTIDES_DATA).filter(peptide => {
    const matchesSearch = peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        peptide.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        peptide.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || peptide.category === filterCategory;
    const matchesOrderStatus = filterOrderStatus === 'all' ||
      (filterOrderStatus === 'ordered' && peptide.ordered) ||
      (filterOrderStatus === 'ofInterest' && !peptide.ordered);
    return matchesSearch && matchesCategory && matchesOrderStatus;
  });

  const orderedCount = Object.values(PEPTIDES_DATA).filter(p => p.ordered).length;
  const ofInterestCount = Object.values(PEPTIDES_DATA).filter(p => !p.ordered).length;

  return window.html`
    <div>
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search peptides..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          value=${searchTerm}
          onInput=${(e) => setSearchTerm(e.target.value)}
        />

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Filter by Order Status:</p>
          <div className="flex flex-wrap gap-2">
            <button onClick=${() => setFilterOrderStatus('all')}
                    className=${`px-4 py-2 rounded-lg ${filterOrderStatus === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              All (${Object.keys(PEPTIDES_DATA).length})
            </button>
            <button onClick=${() => setFilterOrderStatus('ordered')}
                    className=${`px-4 py-2 rounded-lg ${filterOrderStatus === 'ordered' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              Ordered (${orderedCount})
            </button>
            <button onClick=${() => setFilterOrderStatus('ofInterest')}
                    className=${`px-4 py-2 rounded-lg ${filterOrderStatus === 'ofInterest' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              Of Interest (${ofInterestCount})
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Filter by Category:</p>
          <div className="flex flex-wrap gap-2">
            <button onClick=${() => setFilterCategory('all')}
                    className=${`px-4 py-2 rounded-lg text-sm ${filterCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              All
            </button>
            ${categories.map(cat => window.html`
              <button key=${cat} onClick=${() => setFilterCategory(cat)}
                      className=${`px-4 py-2 rounded-lg text-sm ${filterCategory === cat ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                ${cat}
              </button>
            `)}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filteredPeptides.map(peptide => window.html`
          <div key=${peptide.id} className=${`card bg-white rounded-lg shadow-md p-6 cursor-pointer border-2 ${peptide.ordered ? 'border-green-200' : 'border-purple-200'}`}
               onClick=${() => navigate('peptide-detail', peptide)}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">${peptide.name}</h3>
              <div className="flex flex-col gap-1">
                ${peptide.ordered
                  ? window.html`<span className="ordered-badge badge">ORDERED</span>`
                  : window.html`<span className="of-interest-badge badge">OF INTEREST</span>`
                }
                <span className="badge ${getCostColor(peptide.cost_tier)}">
                  ${peptide.cost_tier}
                </span>
              </div>
            </div>
            <p className="text-sm text-purple-600 mb-2">${peptide.type}</p>
            <p className="text-sm text-gray-600 mb-3">${peptide.category}</p>
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">${peptide.mechanism}</p>
          </div>
        `)}
      </div>
    </div>
  `;
};
