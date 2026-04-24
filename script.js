function openLetter(envelope) {
  envelope.classList.toggle("open");

  const sound = document.getElementById("paperSound");
  document.body.classList.toggle("letter-open");

  if (envelope.classList.contains("open")) {
    sound.currentTime = 0;
    sound.play();
  }
}

/* tabs */
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

/* =========================
   🌙 NIGHT MODE TOGGLE
========================= */
function toggleNightMode() {
  document.body.classList.toggle("night");
}

/* =========================
   🌸 PETALS
========================= */
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.querySelector(".petals").appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);

/* =========================
   ✨ STARS (only visible when toggled by CSS theme)
========================= */
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  document.querySelector(".stars").appendChild(star);

  setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 200);