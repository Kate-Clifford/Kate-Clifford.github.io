import coastalRoute from './routeData.js';

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
