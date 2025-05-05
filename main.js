let currentProgress = 30;
const totalGoal = 60;

function updateProgress() {
  if (currentProgress < totalGoal) {
    currentProgress += 10;
    if (currentProgress > totalGoal) currentProgress = totalGoal;
    renderProgress();
  }
}

function clearProgress() {
  currentProgress = 0;
  renderProgress();
}

function renderProgress() {
  const percent = (currentProgress / totalGoal) * 100;
  const ring = document.getElementById("progressRing");
  ring.textContent = `${currentProgress} / ${totalGoal} min`;
  ring.style.background = `conic-gradient(#6ba539 ${percent}%, #87ceeb ${percent}%)`;
}

document.addEventListener("DOMContentLoaded", renderProgress);

document.addEventListener("DOMContentLoaded", () => {
  // Tooltip initialization
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initial render of progress ring
  renderProgress();
});

