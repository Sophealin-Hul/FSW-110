document.getElementById('square').addEventListener('mouseover', mySecFunction);
document.getElementById('square').addEventListener('mousedown', myThirdFuntion);
document.getElementById('square').addEventListener('mouseout', myfourthFunction);
document.getElementById('square').addEventListener('dblclick', myFifthFunction);

function mySecFunction() {
    document.getElementById('square').style.backgroundColor = 'green';
}
function myThirdFuntion() {
    document.getElementById('square').style.backgroundColor = 'yellow';
}
function myfourthFunction() {
    document.getElementById('square').style.backgroundColor = 'blue';   
}
function myFifthFunction() {
    document.getElementById('square').style.backgroundColor = 'red';
}

window.addEventListener('load', function(){
    document.getElementById('square').style.backgroundColor = 'black';
});

window.addEventListener('scroll', function() {
    document.getElementById('square').style.backgroundColor = 'purple';
});
window.addEventListener('keydown', (event) => {
    if (event.key == 'r') {
        document.getElementById('square').style.backgroundColor = 'red';
    }
    if (event.key == 'y') {
        document.getElementById('square').style.backgroundColor = 'yellow';
    }
    if (event.key == 'l') {
        document.getElementById('square').style.backgroundColor = 'blue';
    }
    if (event.key == 'p')  {
        document.getElementById('square').style.backgroundColor = 'purple';
    }
    if (event.key == 'g')  {
        document.getElementById('square').style.backgroundColor = 'green';
    }
    if (event.key == 'b')  {
        document.getElementById('square').style.backgroundColor = 'black';
    }
    if (event.key == 'w')  {
        document.getElementById('square').style.backgroundColor = 'white';
    }
});

var content = document.createElement('h2');
content.textContent = 'Table of Geometry from the 1728';
document.body.appendChild(content);

var img = document.createElement('img');
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_of_Geometry%2C_Cyclopaedia%2C_Volume_1.jpg/1920px-Table_of_Geometry%2C_Cyclopaedia%2C_Volume_1.jpg";
document.body.appendChild(img);
