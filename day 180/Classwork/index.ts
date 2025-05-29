document.getElementById('form')!.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = document.getElementById('num1') as HTMLInputElement;
    const num2 = document.getElementById('num2') as HTMLInputElement;
    const forOutput = document.getElementById('res') as HTMLSpanElement;

    const val1 = Number(num1.value);
    const val2 = Number(num2.value);

    forOutput.textContent = String(val1 + val2)
});
