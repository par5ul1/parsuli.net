const canvas = document.getElementById("hero-animation");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  // Redraw the waves
});

const rowCount = 8;
const amplitude = 15;
const waveSpeed = 0.1;

const rows = [];
for (let i = 0; i < rowCount; i++) {
  rows.push({
    y:
      canvas.height -
      (i * canvas.height) / rowCount -
      canvas.height / (2 * rowCount),
    peaks: 5,
  });
}

function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function drawWave(y, peaks, time) {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let x = 0; x <= canvas.width; x++) {
    const normalizedX = x / canvas.width;
    const wavePhase = normalizedX * peaks * Math.PI * 2 + time;
    const easedAmplitude =
      amplitude * (0.8 + 0.2 * easeInOutSine((Math.sin(time * 0.5) + 1) / 2));
    const waveY = y + Math.sin(wavePhase) * easedAmplitude;
    ctx.lineTo(x, waveY);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();

  ctx.fillStyle = `hsla(51, 100%, ${0.5 * (y / canvas.height) * 100}%, ${
    0.25 * (y / canvas.height)
  })`;
  ctx.fill();
}

let time = 0;
function animateWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rows.forEach((row, i) => {
    const slowDown = i * 2;

    drawWave(row.y, row.peaks, (Math.pow(-1, i) * time) / slowDown);
  });

  time += waveSpeed;
  requestAnimationFrame(animateWaves);
}

animateWaves();
