// Toggle
const toggle = document.querySelector(".nav__toggle");
const navbar = document.querySelector(".nav");

toggle.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// Accordion
const accordion_headings = document.querySelectorAll(".accordion_heading");
const accordion = document.querySelector(".accordion__item");

accordion_headings.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("expanded");
  });
});

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});
