let btn = document.getElementById('change');
let text = document.querySelector('p');

btn.addEventListener('click', function() {
    text.textContent = 'Hello World!';
});