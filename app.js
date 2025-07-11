import coastalRoute from './routeData.js';

// Initialize map centered on Australia
const map = L.map('map').setView([-25, 135], 4); // Center of Australia

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

function showNearestTownMarker(town) {
  // Clear existing markers if needed
  if (window.currentMarker) {
    map.removeLayer(window.currentMarker);
  }

  // Add new marker
  window.currentMarker = L.marker([town.lat, town.lon])
    .addTo(map)
    .bindPopup(`<b>${town.town}</b><br>${town.funFact}`)
    .openPopup();

  // Center map on marker
  map.setView([town.lat, town.lon], 10);
}

// Example usage
const myDistance = 1800;
const nearestTown = findNearestTown(myDistance);
showNearestTownMarker(nearestTown);


function findNearestTown(totalKm) {
  let nearest = coastalRoute[0];
  for (let i = 1; i < coastalRoute.length; i++) {
    if (coastalRoute[i].km <= totalKm && coastalRoute[i].km > nearest.km) {
      nearest = coastalRoute[i];
    }
  }
  return nearest;
}

// Example usage:
const myDistance = 1800;  // Replace with actual total km
const nearestTown = findNearestTown(myDistance);

console.log(`Nearest town: ${nearestTown.town}`);
console.log(`Fun fact: ${nearestTown.funFact}`);

// You can add code here to update your webpage with this info
