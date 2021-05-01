for (var i = 0; i < 10; i++) {
    var hi = document.createElement('h1');
    hi.innerHTML = 'Hello World!';
    document.body.appendChild(hi);
    hi.setAttribute('style', 'color: blue');
}
const names = ['Steve', 'Larry', 'Joe', 'Shirly','Steph', 'Nate', 'Rick', "Emily"];
var myList = document.createElement('p');
document.body.appendChild(myList);
for (var i = 0; i < names.length; i++) {
   myList.innerHTML += '<p>' + names[i] + '</p>';
}