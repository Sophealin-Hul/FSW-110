

function myFunction() {
    var list = document.createElement("li")
    var input = document.getElementById("to-do").value;
    var des = document.getElementById("description").value;
    var text = document.createTextNode(input + " " + des);
    list.appendChild(text);

    if (input === " ") {
        alert("Please add something!")
    }else {
        document.getElementById("unordered").appendChild(list);
    }
    document.getElementById("to-do").value = " ";
    document.getElementById("description").value = " ";
    var span = document.createElement("span");
    var tx = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(tx);
    list.appendChild(span);
    for(i = 0; i <  close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
     
}
var x = document.getElementsByTagName("li")
var i;
for (i = 0; i < x.length; i++) {
    var span = document.createElement("span");
    var tx = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(tx);
    x[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}