function subtract() {
    input1 = document.getElementById('subFirst').value;
    input2 = document.getElementById('subSec').value;
    document.getElementById('result').innerText = input1 - input2;
}
function add() {
    input1 = document.getElementById('addFirst').value;
    input2 = document.getElementById('addSec').value;
    document.getElementById('resultForAdd').innerText = input1 + input2;
}
function mul() {
    input1 = document.getElementById('mulFirst').value;
    input2 = document.getElementById('mulSec').value;
    document.getElementById('resultForMul').innerText = input1 * input2;
}