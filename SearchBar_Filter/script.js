const companies = [
  { name: "Automatic Data Processing", symbol: "ADP" },
  { name: "Apple Inc.", symbol: "AAPL" },
  { name: "BlackRock", symbol: "BLK" },
  { name: "Block H&R", symbol: "HRB" },
  { name: "Coca-Cola Company", symbol: "KO" },
  { name: "ConocoPhillips", symbol: "COP" },
  { name: "Foot Locker Inc", symbol: "FL" },
  { name: "Alphabet Inc.", symbol: "GOOGL" },
  { name: "Amazon.com Inc.", symbol: "AMZN" },
  { name: "Meta Platforms", symbol: "META" },
  { name: "Nvidia", symbol: "NVDA" },
  { name: "Microsoft Corp.", symbol: "MSFT" },
  { name: "Tesla Inc.", symbol: "TSLA" },
  { name: "Walmart Inc.", symbol: "WMT" },
  { name: "Visa Inc.", symbol: "V" },
];

const searchInput = document.getElementById('search');
const resultsList = document.getElementById('search-results');
const resultsContainer = document.getElementById('results-container');

function filterCompanies(query) {
  return companies.filter(company =>
    company.name.toLowerCase().includes(query.toLowerCase()) ||
    company.symbol.toLowerCase().includes(query.toLowerCase())
  );
}

function updateResults(query) {
  if (query.trim().length === 0) {
    resultsContainer.style.display = "none";
    resultsList.innerHTML = '';
    return;
  }
  const filtered = filterCompanies(query);
  resultsList.innerHTML = '';
  filtered.forEach(company => {
    const li = document.createElement('li');
    li.textContent = `${company.name} (${company.symbol})`;
    resultsList.appendChild(li);
  });
  resultsContainer.style.display = filtered.length ? "block" : "none";
}

searchInput.addEventListener('input', function() {
  updateResults(this.value);
});

// No pre-populate: Do not call updateResults('');
