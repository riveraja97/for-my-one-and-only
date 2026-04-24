function openLetter(envelope) {
  envelope.classList.toggle("open");
}

function showTab(event, tabId) {

  // hide all tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // show selected tab
  document.getElementById(tabId).classList.add("active");

  // update active button
  document.querySelectorAll(".navbar button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}