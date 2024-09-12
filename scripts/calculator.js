// Toggle the visibility of the calculator
document.getElementById("toggle-button").addEventListener("click", function () {
    const calculator = document.getElementById("calculator");
    if (calculator.style.display === "block") {
        calculator.style.display = "none";
        this.textContent = "Open Calculator";
    } else {
        calculator.style.display = "block";
        this.textContent = "Close Calculator";
    }
});

function calculateCost() {
    const roomType = document.getElementById('room-type').value;
    const squareFootage = parseFloat(document.getElementById('square-footage').value);
    const quality = document.getElementById('quality').value;

    if (isNaN(squareFootage) || squareFootage <= 0) {
        document.getElementById('result').innerHTML = "Please enter a valid square footage.";
        return;
    }

    let baseCost = 0;
    let minCost = 0;
    let maxCost = 0;

    // Average cost per square foot
    const costPerSquareFoot = quality === 'premium' ? 6.00 : 3.75;

    // Room-specific costs
    switch (roomType) {
        case 'bedroom':
            minCost = 350;
            maxCost = 1500;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'bathroom':
            minCost = 100;
            maxCost = 300;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'kitchen':
            minCost = 250;
            maxCost = 850;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'dining':
            minCost = 500;
            maxCost = 900;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'living':
            minCost = 600;
            maxCost = 1500;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'hallway':
            minCost = 200;
            maxCost = 800;
            baseCost = squareFootage * costPerSquareFoot;
            break;
        case 'stairwell':
            minCost = squareFootage * 20;
            maxCost = squareFootage * 35;
            baseCost = squareFootage * costPerSquareFoot;
            break;
    }

    // Ensure base cost is within the min/max for that room
    if (baseCost < minCost) baseCost = minCost;
    if (baseCost > maxCost) baseCost = maxCost;

    document.getElementById('result').innerHTML = `Estimated cost: $${baseCost.toFixed(2)}`;
}
