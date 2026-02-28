// ResearchCitations.js - PubMed citation display component
// Destructure React hooks
var { useState, useMemo, useEffect } = React;

// Register the component on window.APP
window.APP.ResearchCitations = function ResearchCitations({ peptide }) {
  var citations = window.APP.CITATIONS_DATA[peptide.id];

  if (!citations || !citations.citations || citations.citations.length === 0) {
    return null;
  }

  // Local state - properly destructure useState
  var expandedPMIDState = useState(null);
  var expandedPMID = expandedPMIDState[0];
  var setExpandedPMID = expandedPMIDState[1];

  var filterStudyTypeState = useState('all');
  var filterStudyType = filterStudyTypeState[0];
  var setFilterStudyType = filterStudyTypeState[1];

  var pageState = useState(1);
  var page = pageState[0];
  var setPage = pageState[1];

  var searchQueryState = useState('');
  var searchQuery = searchQueryState[0];
  var setSearchQuery = searchQueryState[1];

  // Pagination settings
  var perPage = 20;

  // Reset to page 1 when filters change
  useEffect(function() {
    setPage(1);
  }, [filterStudyType, searchQuery]);

  // Get unique study types from data
  var studyTypes = useMemo(function() {
    var types = new Set();
    citations.citations.forEach(function(c) {
      if (c.study_type) {
        types.add(c.study_type);
      }
    });
    return Array.from(types).sort();
  }, [citations.citations]);

  // Filter citations based on study type and search query
  var filteredCitations = useMemo(function() {
    return citations.citations.filter(function(citation) {
      // Study type filter
      if (filterStudyType !== 'all' && citation.study_type !== filterStudyType) {
        return false;
      }
      // Search filter
      if (searchQuery) {
        var query = searchQuery.toLowerCase();
        var title = (citation.title || '').toLowerCase();
        var abstract = (citation.abstract || '').toLowerCase();
        var authors = (citation.authors || '').toLowerCase();
        var journal = (citation.journal || '').toLowerCase();
        return title.includes(query) ||
               abstract.includes(query) ||
               authors.includes(query) ||
               journal.includes(query);
      }
      return true;
    });
  }, [citations.citations, filterStudyType, searchQuery]);

  // Pagination
  var totalPages = Math.ceil(filteredCitations.length / perPage);
  var paginatedCitations = useMemo(function() {
    var start = (page - 1) * perPage;
    return filteredCitations.slice(start, start + perPage);
  }, [filteredCitations, page, perPage]);

  // Get study type badge color
  function getStudyTypeColor(studyType) {
    if (!studyType) return 'bg-gray-100 text-gray-800';
    var type = studyType.toLowerCase();
    if (type.includes('randomized')) return 'bg-green-100 text-green-800';
    if (type.includes('clinical trial')) return 'bg-blue-100 text-blue-800';
    if (type.includes('review')) return 'bg-purple-100 text-purple-800';
    if (type.includes('cohort')) return 'bg-orange-100 text-orange-800';
    if (type.includes('meta-analysis')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  }

  return window.html`
    <div className="mt-8 bg-gradient-to-br from-slate-50 to-purple-50 border-2 border-slate-300 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-purple-500 pb-3">
        Research Citations
      </h2>

      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Citation Summary</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <strong className="text-2xl text-purple-600">${filteredCitations.length}</strong>
              <span className="ml-1">of ${citations.total} citations</span>
              ${searchQuery || filterStudyType !== 'all' ? window.html`<span className="text-sm text-gray-500"> (filtered)</span>` : ''}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Study Types:</p>
            <div className="flex flex-wrap gap-2">
              ${Object.entries(citations.study_counts).slice(0, 5).map(function(entry) {
                var type = entry[0];
                var count = entry[1];
                return window.html`
                  <span key=${type} className="text-xs px-2 py-1 rounded ${getStudyTypeColor(type)}">
                    ${type}: ${count}
                  </span>
                `;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="citation-search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              id="citation-search"
              type="text"
              value=${searchQuery}
              onChange=${function(e) { return setSearchQuery(e.target.value); }}
              placeholder="Search title, abstract, authors, journal..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="study-type-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Study Type
            </label>
            <select
              id="study-type-filter"
              value=${filterStudyType}
              onChange=${function(e) { return setFilterStudyType(e.target.value); }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="all">All Study Types (${citations.total})</option>
              ${studyTypes.map(function(type) {
                var count = citations.citations.filter(function(c) { return c.study_type === type; }).length;
                return window.html`
                  <option key=${type} value=${type}>${type || 'Unknown'} (${count})</option>
                `;
              })}
            </select>
          </div>
        </div>

        ${(searchQuery || filterStudyType !== 'all') && window.html`
          <div className="mt-3">
            <button
              onClick=${function() { setSearchQuery(''); setFilterStudyType('all'); }}
              className="text-sm text-purple-600 hover:text-purple-800 underline"
            >
              Clear all filters
            </button>
          </div>
        `}
      </div>

      <div className="text-sm text-gray-600 mb-4">
        Showing ${Math.min((page - 1) * perPage + 1, filteredCitations.length)}-${Math.min(page * perPage, filteredCitations.length)} of ${filteredCitations.length} citations
      </div>

      <div className="space-y-4">
        ${paginatedCitations.map(function(citation) {
          var isExpanded = expandedPMID === citation.pmid;
          return window.html`
            <div key=${citation.pmid} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h4 className="font-semibold text-gray-800 flex-1">${citation.title || 'No title available'}</h4>
                <div className="flex flex-wrap gap-2">
                  ${citation.year && window.html`
                    <span className="badge bg-blue-100 text-blue-800 text-sm">${citation.year}</span>
                  `}
                  <span className="badge text-sm ${getStudyTypeColor(citation.study_type)}">
                    ${citation.study_type || 'Unknown'}
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-2">
                ${citation.authors && window.html`<span className="mr-2">${citation.authors}</span>`}
                ${citation.journal && window.html`<span className="italic">${citation.journal}</span>`}
              </div>

              ${citation.abstract && window.html`
                <div className="mt-3">
                  <button
                    onClick=${function() { return setExpandedPMID(isExpanded ? null : citation.pmid); }}
                    className="text-sm text-purple-600 hover:text-purple-800 focus:outline-none focus:underline"
                  >
                    ${isExpanded ? '▼ Hide' : '▶ Show'} Abstract
                  </button>
                  ${isExpanded && window.html`
                    <div className="mt-2 text-sm text-gray-700 bg-gray-50 p-3 rounded border-l-4 border-purple-400">
                      ${citation.abstract}
                    </div>
                  `}
                </div>
              `}

              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href=${citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 hover:text-purple-800 inline-flex items-center"
                >
                  View on PubMed →
                </a>
                ${citation.doi && window.html`
                  <a
                    href=${'https://doi.org/' + citation.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    DOI: ${citation.doi}
                  </a>
                `}
              </div>

              ${citation.mesh_terms && window.html`
                <div className="mt-2">
                  <span className="text-xs text-gray-500">MeSH:</span>
                  <span className="text-xs text-gray-600 ml-1">${citation.mesh_terms.split(';').slice(0, 5).join('; ')}</span>
                </div>
              `}
            </div>
          `;
        })}
      </div>

      ${filteredCitations.length === 0 && window.html`
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600">No citations match your filters.</p>
          <button
            onClick=${function() { setSearchQuery(''); setFilterStudyType('all'); }}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Clear Filters
          </button>
        </div>
      `}

      ${totalPages > 1 && window.html`
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Page ${page} of ${totalPages}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick=${function() { return setPage(Math.max(1, page - 1)); }}
              disabled=${page === 1}
              className="px-3 py-1 rounded border ${page === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}"
            >
              Previous
            </button>

            ${Array.from({length: Math.min(5, totalPages)}).map(function(_, i) {
              var pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (page <= 3) {
                pageNum = i + 1;
              } else if (page >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = page - 2 + i;
              }

              var isCurrentPage = pageNum === page;
              return window.html`
                <button
                  key=${pageNum}
                  onClick=${function() { return setPage(pageNum); }}
                  className="px-3 py-1 rounded border ${isCurrentPage ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}"
                >
                  ${pageNum}
                </button>
              `;
            })}

            ${totalPages > 5 && window.html`
              <span className="px-2 text-gray-500">...</span>
            `}

            <button
              onClick=${function() { return setPage(Math.min(totalPages, page + 1)); }}
              disabled=${page === totalPages}
              className="px-3 py-1 rounded border ${page === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}"
            >
              Next
            </button>
          </div>

          <div className="text-sm text-gray-600">
            ${filteredCitations.length} citation${filteredCitations.length !== 1 ? 's' : ''} total
          </div>
        </div>
      `}
    </div>
  `;
};
