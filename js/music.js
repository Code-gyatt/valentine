// js/music.js
document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const oofSound = document.getElementById("oof-sound");
  const musicBtn = document.getElementById("music-btn");
  const noBtn = document.getElementById("noBtn");

  let isPlaying = false;

  // 🚀 AUTO PLAY MUSIC ON FIRST USER INTERACTION
  const startMusicOnce = async () => {
    try {
      await bgMusic.play();
      isPlaying = true;
      if (musicBtn) musicBtn.textContent = "🔇 Mute";
    } catch (e) {
      console.log("Autoplay blocked until interaction");
    }
  };

  document.addEventListener("click", startMusicOnce, { once: true });
  document.addEventListener("touchstart", startMusicOnce, { once: true });

  // 🎵 Manual toggle
  if (musicBtn && bgMusic) {
    musicBtn.addEventListener("click", async () => {
      if (!isPlaying) {
        await bgMusic.play();
        musicBtn.textContent = "🔇 Mute";
      } else {
        bgMusic.pause();
        musicBtn.textContent = "🔊 Music";
      }
      isPlaying = !isPlaying;
    });
  }

  // 🔊 OOF sound
  if (noBtn && oofSound) {
    noBtn.addEventListener("click", async () => {
      oofSound.currentTime = 0;
      await oofSound.play();
    });
  }
});
