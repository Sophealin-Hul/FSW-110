// make the box disapear when the user clicks it
document.querySelector('.red-box').addEventListener('click', myfunc);
function myfunc() {
    document.querySelector('.red-box').classList.remove('red-box');
}
