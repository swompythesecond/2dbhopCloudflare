function getTouchXCoordinates() {
    let xCoordinates = [];
    for (let i = 0; i < touches.length; i++) {
        xCoordinates.push(touches[i].x);
    }
    return JSON.stringify(xCoordinates);
}
