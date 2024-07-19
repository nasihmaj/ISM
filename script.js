function performCalculation() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var result = input1 + input2; // Modify this line based on your calculation needs
    document.getElementById('result').innerText = 'Result: ' + result;
}
