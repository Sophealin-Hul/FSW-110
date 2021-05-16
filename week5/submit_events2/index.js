function showAlert() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var aged = document.getElementById('age').value;
    var selected = document.querySelector('input[type=radio][name=decision]:checked').value;
    var rates = document.getElementById('rate').value;
    var purchase = document.getElementsByName('items');
    var selectedPurchcases = '';
    for (var i=0; i<purchase.length; i++) {
        if (purchase[i].type == 'checkbox' && purchase[i].checked == true )
            selectedPurchcases += purchase[i].value + ' ' + ' ';
    }

    alert('First Name: ' + fName + '\n' + 'Last Name: ' + lName + '\n' + 'Age: ' + aged + '\n' + 'Member: '
            + selected + '\n' + 'Rate Our Store: ' + rates + '\n' + 'Purchased: ' + selectedPurchcases);
    

}