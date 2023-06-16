// List of hexagon IDs
const hexagons = ['hexagon1', 'hexagon2', 'hexagon3'];

// Function to light up a hexagon
function lightUp(hexagonId) {
  const hexagon = document.getElementById(hexagonId);
  hexagon.style.border = '1px solid white'; // Replace with your "light up" style

  // After a delay, dim the hexagon
  setTimeout(() => {
    hexagon.style.border = '1px solid black'; // Replace with your normal style
  }, 1000);
}

// Function to light up hexagons in sequence
function animateLight() {
  for (let i = 0; i < hexagons.length; i++) {
    // Set a delay for each hexagon based on its position in the sequence
    setTimeout(() => lightUp(hexagons[i]), i * 1000);
  }
}

// Start the animation
animateLight();

// Repeat the animation every 5 seconds (or however long you need)
setInterval(animateLight, 5000);
