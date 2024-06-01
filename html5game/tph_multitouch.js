var touchXCoords = [0, 0, 0, 0];
function getTouchXCoordinates() {
    return JSON.stringify(touchXCoords);
}

function setTouchXCoordinates(event) {
    touchXCoords = [0, 0, 0, 0];
    for (let i = 0; i < Math.min(event.touches.length, 4); i++) {
        touchXCoords[i] = event.touches[i].clientX;
    }

    // Return the array
    return touchXCoords;
}

// Example usage of the function with touchstart and touchmove event listeners
document.addEventListener('touchstart', function(event) {
    setTouchXCoordinates(event);
});

document.addEventListener('touchmove', function(event) {
    setTouchXCoordinates(event);
});