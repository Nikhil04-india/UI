const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    const linkId = elem.id;

    allLinks.forEach((link) => {
      link.classList.toggle("active", link === elem);
    });

    allTabs.forEach((tab) => {
      const id = tab.id;
      tab.classList.toggle("tab-content--active", id === linkId + "-content");
    });
  });
});