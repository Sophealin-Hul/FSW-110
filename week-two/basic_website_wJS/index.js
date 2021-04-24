var link = document.createElement('a');
var linkText = document.createTextNode('Home');
link.appendChild(linkText);
link.href = 'http://google.com';
document.body.appendChild(link);


var fox = document.createElement('h1');
fox.textContent = 'As I walked home last night, I saw a lone fox dancing';
document.body.appendChild(fox);

var dance = document.createElement('p');
dance.textContent = 'In the bright moonlight, I stood and watch, then took the low road, knowing the night was his by right';
document.body.appendChild(dance);

var home = document.createElement('li');
home.textContent = 'Sometime when words ring true';
document.body.appendChild(home);

var home1 = document.createElement('li');
home1.textContent = 'I am like a lone fox';
document.body.appendChild(home1);

var home2 = document.createElement('li');
home2.textContent = 'Dancing in the morning dew';
document.body.appendChild(home2);

var feet = document.createElement('footer');
feet.textContent = 'Reference from: Highlight Kids'
document.body.appendChild(feet);


