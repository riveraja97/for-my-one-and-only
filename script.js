function openLetter(el) {
  el.classList.toggle("open");
  document.body.classList.toggle("letter-open");

  const sound = document.getElementById("paperSound");
  if (el.classList.contains("open")) {
    sound.currentTime = 0;
    sound.play();
  }
}


/* =========================
   💌 LETTER TOGGLE (IMPORTANT FIX)
========================= */
function openLetter(el) {
  el.classList.toggle("open");

  // THIS is what triggers navbar fade
  document.body.classList.toggle("letter-open");

  const sound = document.getElementById("paperSound");

  if (el.classList.contains("open")) {
    sound.currentTime = 0;
    sound.play();
  }
}

/* tabs + petals control */
function showTab(event, tabId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");

  document.querySelectorAll(".navbar button").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  if (tabId === "playlist") {
    document.body.classList.add("hide-petals");
  } else {
    document.body.classList.remove("hide-petals");
  }
}

/* 🌙 NIGHT MODE */
function toggleNightMode() {
  document.body.classList.toggle("night");
}

/* =========================
   ✨ STAR CREATION (FIXED DENSITY)
========================= */
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  const size = Math.random() * 2 + 2; // slightly bigger stars
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.querySelector(".stars").appendChild(star);

  setTimeout(() => star.remove(), 6000);
}

/* 🌙 MORE FREQUENT STAR SPAWNING = FIX VISIBILITY */
setInterval(createStar, 120);

/* 🎧 OPEN SPOTIFY */
function openPlaylist() {
  window.open("YOUR_SPOTIFY_PLAYLIST_LINK_HERE", "_blank");
}

/* =========================
   🎧 SPOTIFY WIDGET CONTROLS
========================= */
function spotifyPlay() {
  document.getElementById("spotifyFrame").contentWindow.focus();
}

function spotifyPause() {
  document.getElementById("spotifyFrame").contentWindow.focus();
}

function spotifyNext() {
  document.getElementById("spotifyFrame").contentWindow.focus();
}

/* 🌸 PETALS */
function createPetal() {
  const p = document.createElement("div");
  p.classList.add("petal");
  p.style.left = Math.random()*100 + "vw";
  p.style.animationDuration = (Math.random()*5+5)+"s";
  document.querySelector(".petals").appendChild(p);
  setTimeout(()=>p.remove(),10000);
}
setInterval(createPetal,300);

/* ✨ HEARTS */
function createHeart() {
  const h = document.createElement("div");
  h.classList.add("heart");

  const colors = ["pink","red","purple","white"];
  h.classList.add(colors[Math.floor(Math.random()*colors.length)]);

  h.innerText = "❤";
  h.style.left = Math.random()*100 + "vw";
  h.style.animationDuration = (Math.random()*3+2)+"s";

  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),4000);
}

setInterval(()=>{
  if(document.getElementById("playlist").classList.contains("active")){
    createHeart();
  }
},250);