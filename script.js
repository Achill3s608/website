const rain = document.getElementById('rain');
const numDrops = 150; // adjust for density

for (let i = 0; i < numDrops; i++) {
  const drop = document.createElement('div');
  drop.className = 'drop';

  // Start at a random horizontal position
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.top = (Math.random() * -100) + 'vh'; // start off-screen

  // Random dark grey shade
  const grey = Math.floor(Math.random() * 60) + 40; // RGB 40–100
  drop.style.background = `rgb(${grey}, ${grey}, ${grey})`;

  // Slower, varied falling speeds
  drop.style.animationDuration = (2 + Math.random() * 3) + 's'; // 2–5s
  drop.style.animationDelay = Math.random() * 5 + 's';

  rain.appendChild(drop);
}