function calculateTotalCost() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelCost = parseFloat(document.getElementById('fuelCost').value);
    var averageMPG = parseFloat(document.getElementById('averageMPG').value);
    var cargoWeight = parseFloat(document.getElementById('cargoWeight').value);
    var driverWage = parseFloat(document.getElementById('driverWage').value);
    var travelHours = parseFloat(document.getElementById('travelHours').value);

    var fuelNeeded = distance / averageMPG;
    var totalFuelCost = fuelNeeded * fuelCost;
    var totalDriverCost = driverWage * travelHours;

    var totalCost = totalFuelCost + totalDriverCost;
    document.getElementById('result').innerText = 'Total Cost: $' + totalCost.toFixed(2);
}
