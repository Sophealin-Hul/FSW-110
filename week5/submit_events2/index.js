function showAlert() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var aged = document.getElementById('age').value;
    var selected = document.querySelector('input[type=radio][name=decision]:checked').value;
    var rates = document.getElementById('rate').value;
    var purchase = document.querySelector('input[type=checkbox][name=items]:checked').value;
    
    alert('First Name: ' + fName + '\n' + 'Last Name: ' + lName + '\n' + 'Age: ' + aged + '\n' + 'Member: '
            + selected + '\n' + 'Rate Our Store: ' + rates + '\n' + 'Purchased: ' + purchase);
    

}