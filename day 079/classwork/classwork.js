// function calc(){
//     let num1 = Number(prompt('enter number 1'))
//     let num2 = Number(prompt('enter number 2'))
//     result = document.getElementById('Result')
//     result.textContent = num1 + num2
// }

function validate() {
    const mail = document.getElementById('gmail').value; // first on line 9-12 we use document.getelementbyid and .value to get the value of each inputs
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    const favColor = document.getElementById('color').value;
    // then we use if statments to check if either of these inputs are empty if they are we alert that all forms need to be filled out and console log 'Invalid login'
    // otherwise we log 'Login succesful'
    if (mail === '' || password === '' || fullName === '' || favColor === '') {
        alert('You need to fill out all the forms');
        console.log('Invalid login');
    } else {
        console.log('Login successful');
    }
}

//finally we use .onclick function so our functions gets called on the click of the button 
document.getElementById('BTN').onclick = validate;