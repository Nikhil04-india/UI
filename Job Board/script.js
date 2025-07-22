const allLinks = document.querySelectorAll('.tabs a');
const allTabs = document.querySelectorAll('.tab-content');

// Job records (add more jobs with company logos!)
const tabRecords = [
  {
    company: {
      src: "assets/companies/aws.jpeg",
      name: "Amazon",
    },
    role: "Senior DevOps Engineer",
    type: "on-site",
    salary: "$220k - $300k / year",
    location: "New York, United States",
    applicants: [
      "assets/applicants/lilia.jpeg",
      "assets/applicants/drew.jpeg",
      "assets/applicants/melissa.jpeg"
    ],
    applicationsCount: 220,
  },
  {
    company: {
      src: "assets/companies/google.png",
      name: "Google",
    },
    role: "Senior Backend Developer",
    type: "hybrid",
    salary: "$225k - $280k / year",
    location: "San Francisco, United States",
    applicants: [
      "assets/applicants/lilia.jpeg",
      "assets/applicants/drew.jpeg",
      "assets/applicants/melissa.jpeg"
    ],
    applicationsCount: 240,
  },
  {
    company: {
      src: "assets/companies/meta.png",
      name: "Meta",
    },
    role: "Senior Backend Developer",
    type: "hybrid",
    salary: "$215k - $260k / year",
    location: "London, United Kingdom",
    applicants: [
      "assets/applicants/lilia.jpeg",
      "assets/applicants/drew.jpeg",
      "assets/applicants/melissa.jpeg"
    ],
    applicationsCount: 235,
  },
  {
    company: {
      src: "assets/companies/microsoft.jpeg",
      name: "Microsoft",
    },
    role: "Frontend Engineer",
    type: "remote",
    salary: "$200k - $250k / year",
    location: "Remote",
    applicants: [
      "assets/applicants/lilia.jpeg",
      "assets/applicants/drew.jpeg"
    ],
    applicationsCount: 180,
  },
  {
    company: {
      src: "assets/companies/netflix.png",
      name: "Netflix",
    },
    role: "Full Stack Developer",
    type: "on-site",
    salary: "$210k - $270k / year",
    location: "Los Angeles, United States",
    applicants: [
      "assets/applicants/melissa.jpeg",
      "assets/applicants/drew.jpeg"
    ],
    applicationsCount: 195,
  },
  {
    company: {
      src: "assets/companies/apple.jpeg",
      name: "Apple",
    },
    role: "iOS Developer",
    type: "remote",
    salary: "$190k - $240k / year",
    location: "Remote",
    applicants: [
      "assets/applicants/lilia.jpeg",
      "assets/applicants/melissa.jpeg"
    ],
    applicationsCount: 170,
  },
];

const filter = {
  all: () => true,
  remote: job => job.type === "remote",
  onsite: job => job.type === "on-site",
  hybrid: job => job.type === "hybrid",
};

function generateTabItems(elem, tabContent) {
  const filterName = elem.name;
  const filterFunc = filter[filterName];
  const mappedRecords = tabRecords.filter(filterFunc).map(job => {
    return `
      <div class="job">
        <img class="company-logo" src="${job.company.src}" alt="${job.company.name}">
        <div class="job-details">
          <div class="job-title">${job.role} <span style="font-weight:400;">(${job.type})</span></div>
          <div class="job-company">${job.company.name}</div>
          <div class="job-meta">
            <span class="location"><span class="location-icon"></span>${job.location}</span>
            <span class="job-applicants">
              <span class="applicant-avatars">
                ${job.applicants.map(a => `<img src="${a}" alt="Applicant">`).join('')}
              </span>
              +${job.applicationsCount} applicants
            </span>
          </div>
          <div class="job-salary">${job.salary}</div>
        </div>
        <span class="job-bookmark" title="Bookmark"></span>
      </div>
    `;
  });
  tabContent.innerHTML = mappedRecords.join("") || `<div>No jobs found.</div>`;
}

// Tab click logic
allLinks.forEach((elem) => {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    allLinks.forEach(link => link.classList.remove('active'));
    elem.classList.add('active');
    allTabs.forEach(tab => tab.classList.remove('tab-content-active'));
    const tabId = elem.id + '-content';
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('tab-content-active');
      generateTabItems(elem, activeTab);
    }
  });
});

// Show jobs on initial page load for default tab
window.addEventListener('DOMContentLoaded', () => {
  const defaultTab = document.querySelector('.tabs a.active');
  const defaultTabContent = document.getElementById(defaultTab.id + '-content');
  generateTabItems(defaultTab, defaultTabContent);
});