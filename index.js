// Code your solution in this file!
// Function to tell distance from hq to pickup location
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
}

// Function to tell distance from hq to pickup location in ft
function  distanceFromHqInFeet(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq) * 264;
}

// Function to tell distance traveled in ft
function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance > 2500) {
        return 'cannot travel that far';
      } else if (distance > 2000) {
        return 25;
      } else if (distance > 400) {
        return ((distance - 400) * 0.02);
      } else {
        return 0;
      }
}

