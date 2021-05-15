function showAlert() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var deci1 = document.getElementById('decision1').value;
    var deci2 = document.getElementById('decision2').value;
    var rating = document.getElementById('rate').value;
    var purchase1 = document.getElementById('item1').value;
    var purchase2 = document.getElementById('item2').value;
    var purchase3 = document.getElementById('item3').value;
    alert('First Name: ' +fname + '\n' + 'Last Name: ' + lname + '\n' + 'Age: ' + age + '\n' + deci1 + 
            '\n' + deci2 + '\n' + rating + '\n' + purchase1 + '\n' + purchase2 + '\n' + purchase3);
    return false;
}
