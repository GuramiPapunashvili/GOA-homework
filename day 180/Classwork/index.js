document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var forOutput = document.getElementById('res');
    var val1 = Number(num1.value);
    var val2 = Number(num2.value);
    var result = val1 + val2;
    forOutput.textContent = result.toString();
});
