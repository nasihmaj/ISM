function calculateTotalCost() {
  //  date
    // comapny
//excel

    var totalMiles = parseFloat(document.getElementById('totalMiles').value);
    var payRate = parseFloat(document.getElementById('payRate').value);

  /*  var totalpayRate= parseFloat(document.getElementById('fuelCost').value);
    var Pickup_drop = parseFloat(document.getElementById('averageMPG').value);
    var waiting_Time = parseFloat(document.getElementById('cargoWeight').value);
    var Safety_bonus = parseFloat(document.getElementById('driverWage').value);

    var layOver = parseFloat(document.getElementById('travelHours').value);
    var    Cash_Advance = parseFloat(document.getElementById('travelHours').value);

    var Driver_pay = parseFloat(document.getElementById('travelHours').value);
    var Misc =parseFloat(document.getElementById('travelHours').value);
    var totalFuelCost = parseFloat(document.getElementById('travelHours').value);
    var  pay_recieved = parseFloat(document.getElementById('travelHours').value);
    var  comapny_profit = parseFloat(document.getElementById('travelHours').value);
*/



    var totalCost = totalMiles * payRate;
    document.getElementById('result').innerText = 'Total Cost: $' + totalCost.toFixed(2);
}
