/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
window.addEventListener('keypress', function(event) {
  var p = document.createElement('p');
  p.textContent = `You've pressed the : key = '${event.key}' | Its key code is ='${event.keyCode}'`;
  document.getElementById('output').appendChild(p);
}, true);
