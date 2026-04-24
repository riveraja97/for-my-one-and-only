function openLetter(envelope) {
  envelope.classList.toggle("open");

  const sound = document.getElementById("paperSound");

  // toggle body effect for navbar fade
  document.body.classList.toggle("letter-open");

  // play sound on open only
  if (envelope.classList.contains("open")) {
    sound.currentTime = 0;
    sound.play();
  }
}

function showTab(event, tabId) {

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  document.querySelectorAll(".navbar button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}