document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', calculateTotalCost);
});

function calculateTotalCost() {
    var date = document.getElementById('date').value;
    var totalMiles = parseFloat(document.getElementById('totalMiles').value);
    var payRate = parseFloat(document.getElementById('payRate').value);

    var totalFare = totalMiles * payRate;

    var pickupOrDrop = parseFloat(document.getElementById('averageMPG').value);
    var waitingTime = parseFloat(document.getElementById('cargoWeight').value);
    var safetyBonus = parseFloat(document.getElementById('driverWage').value);
    var layOver = parseFloat(document.getElementById('travelHours').value);
    var cashInAdvance = parseFloat(document.getElementById('cashAdvance').value);
    var driverPay = parseFloat(document.getElementById('driverPay').value);
    var misc = parseFloat(document.getElementById('misc').value);
    var totalFuelCost = parseFloat(document.getElementById('totalFuelCost').value);
    var payReceived = parseFloat(document.getElementById('payReceived').value);
    var totalProfit = parseFloat(document.getElementById('totalProfit').value);

    if (isNaN(totalMiles) || isNaN(payRate) || isNaN(pickupOrDrop) || isNaN(waitingTime) || isNaN(safetyBonus) ||
        isNaN(layOver) || isNaN(cashInAdvance) || isNaN(driverPay) || isNaN(misc) || isNaN(totalFuelCost) ||
        isNaN(payReceived) || isNaN(totalProfit)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for all fields.';
        return;
    }

    var totalCost = totalFare + pickupOrDrop + waitingTime + safetyBonus + layOver + cashInAdvance + driverPay + misc + totalFuelCost - payReceived - totalProfit;

    document.getElementById('result').innerText = 'Total Cost: $' + totalCost.toFixed(2);

    // Save the results in a global variable to be used for PDF download
    window.calculationResult = {
        date: date,
        totalMiles: totalMiles,
        payRate: payRate,
        totalFare: totalFare,
        pickupOrDrop: pickupOrDrop,
        waitingTime: waitingTime,
        safetyBonus: safetyBonus,
        layOver: layOver,
        cashInAdvance: cashInAdvance,
        driverPay: driverPay,
        misc: misc,
        totalFuelCost: totalFuelCost,
        payReceived: payReceived,
        totalProfit: totalProfit,
        totalCost: totalCost
    };
}

function downloadPDF() {
    var result = window.calculationResult;

    if (!result) {
        document.getElementById('result').innerText = 'Please calculate the total cost first.';
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("ISM LOGISTICS INC", 105, 10, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Date: ${result.date}`, 200, 10, null, null, 'right');
    doc.setFontSize(14);
    doc.text("Calculation Details", 105, 20, null, null, 'center');

    doc.setFontSize(12);
    let yPos = 30;
    const lineHeight = 10;

    doc.text(`Total Miles: ${result.totalMiles}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Pay Rate: ${result.payRate}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Total Fare: ${result.totalFare}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Pickup/Drop: ${result.pickupOrDrop}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Waiting Time: ${result.waitingTime}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Safety Bonus: ${result.safetyBonus}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Layover: ${result.layOver}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Cash in Advance: ${result.cashInAdvance}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Driver Pay: ${result.driverPay}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Miscellaneous Costs: ${result.misc}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Total Fuel Cost: ${result.totalFuelCost}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Pay Received: ${result.payReceived}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Total Profit: ${result.totalProfit}`, 20, yPos);
    yPos += lineHeight;
    doc.text(`Total Cost: ${result.totalCost}`, 20, yPos);
    yPos += lineHeight;

    doc.save('trucking_cost_calculator.pdf');
}
