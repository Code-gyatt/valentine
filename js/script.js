function yes() {
  window.location.href = "yes.html";
}

const noBtn = document.getElementById("noBtn");

let scale = 1; // button size reducer

const messages = [
  "NO 💔",
  "Hey! 😳",
  "Missed me 😜",
  "Click YES ❤️",
  "Almost 😏",
  "Wrong button 😆",
  "Try YES 😘",
  "Not today 😈",
  "You can’t 😜",
  "YES is better 💓",
  "Nope 😎",
  "Think again 🥹",
  "That tickles 😂",
  "Close one 😅",
  "Be brave ❤️",
  "Oops 😬",
  "Still NO? 😵",
  "Just say YES 💕",
  "I’m shy 🙈",
  "Haha no 😆",
  "Come on 😍",
  "Heart says YES 💖",
  "Nice try 😏",
  "Why so serious 😜",
  "Almost had me 😅",
  "Try harder 😈",
  "YES = happiness ✨",
  "NO is broken 🚫",
  "Just tap YES 😘",
  "Don’t resist 💓"
];

noBtn.addEventListener("click", (e) => {
  e.preventDefault();

  /* 📳 MOBILE VIBRATION (SAFE) */
  if ("vibrate" in navigator) {
    navigator.vibrate(100); // 100ms vibration
  }

  /* 📉 SHRINK BUTTON */
  scale -= 0.08;
  if (scale < 0.4) scale = 0.4;
  noBtn.style.transform = `scale(${scale})`;

  /* 🏃 MOVE BUTTON */
  noBtn.style.position = "absolute";
  const x = Math.random() * 70 + 10;
  const y = Math.random() * 70 + 10;
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";

  /* 💬 CHANGE TEXT */
  noBtn.innerText = messages[Math.floor(Math.random() * messages.length)];
});
document.body.addEventListener('touchstart', () => {
  // Add heart animation class
});
