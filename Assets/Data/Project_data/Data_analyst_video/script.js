const video = document.getElementById('mainVideo');
const qualitySelect = document.getElementById('qualitySelect');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

playPauseBtn.onclick = () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    video.pause();
    playPauseBtn.textContent = '▶️';
  }
};

muteBtn.onclick = () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? '🔊' : '🔇';
};

qualitySelect.onchange = () => {
  const selectedQuality = qualitySelect.value;
  const sources = video.querySelectorAll('source');
  let currentTime = video.currentTime;
  let isPaused = video.paused;
  sources.forEach(source => {
    if (source.getAttribute('data-quality') === selectedQuality) {
      video.src = source.src;
    }
  });
  video.load();
  video.currentTime = currentTime;
  if (!isPaused) video.play();
};
