console.log("JS LOADED");

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
   🎧 SPOTIFY BUTTONS → OPEN LINK
========================= */

const SPOTIFY_LINK = "YOUR_SPOTIFY_PLAYLIST_LINK_HERE";

function openSpotify() {
  window.open(SPOTIFY_LINK, "_blank");
}

function spotifyPlay() {
  openSpotify();
}

function spotifyPause() {
  openSpotify();
}

function spotifyNext() {
  openSpotify();
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

/* =========================
   💌 MINI LETTER OPEN
========================= */
function openMiniLetter(el) {
  el.classList.toggle("open");
}


/* =========================
   😂 JOKE GENERATOR
========================= */

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field 😂",
  "I told my girlfriend she drew her eyebrows too high… she looked surprised 💀",
  "Why don’t skeletons fight each other? They don’t have the guts 😭",
  "I only know 25 letters of the alphabet… I don’t know y 🤔",
  "Why did the math book look sad? It had too many problems 💔",
  "What do you call fake spaghetti? An impasta 🍝",
  "Why did the computer go to therapy? It had too many bytes of trauma 💻",
  "I’m reading a book about anti-gravity… it’s impossible to put down 😌",
  "Why did the coffee file a police report? It got mugged ☕",
  "Why don’t eggs tell jokes? They’d crack up 🥚😂",
  "I tried to catch fog yesterday… Mist 🤡",
  "Why did the student eat his homework? The teacher said it was a piece of cake 🍰",
  "Why don’t programmers like nature? Too many bugs 🐛",
  "I used to play piano by ear… now I use my hands 🎹",
  "Why did the banana go to the doctor? It wasn’t peeling well 🍌",
  "What do you call a bear with no teeth? A gummy bear 🐻",
  "Why was 6 afraid of 7? Because 7 8 9 😂",
  "Why did the phone break up with the charger? It needed space 📱",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one ⛳"
];

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("jokeBox").innerText = jokes[randomIndex];
}