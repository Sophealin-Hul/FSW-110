document.querySelector('.red-box').addEventListener('mousemove', function box(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.querySelector('.red-box').innerHTML = coords;
});