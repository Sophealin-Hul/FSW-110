for (var i = 0; i < 5; i++) {
    var text = document.createElement('h2');
    text.innerHTML = 'Little Nightmare';
    document.body.appendChild(text);

    text.style.fontSize = '20px';
    text.style.fontWeight = 'lighter';
    text.style.fontFamily = 'sans-serif';
    text.style.color = 'cornflowerblue';

    text.classList.add('border');

}
