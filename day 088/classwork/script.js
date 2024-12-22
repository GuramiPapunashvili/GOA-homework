// const form = document.getElementById('myForm')
// const table = document.getElementById('myTable')

// let fullName, email, tr, tdName, tdEmail

// function gettingInfo(){
//     fullName = form.fullName.value
//     email = form.email.value
// }

// function creatingElements(){
//     tr = document.createElement('tr')
//     tdName = document.createElement('td')
//     tdEmail = document.createElement('td')
// }

// function addingInfo(){
//     tdName.textContent = fullName
//     tdEmail.textContent = email

//     tr.appendChild(tdName)
//     tr.appendChild(tdEmail)

//     table.appendChild(tr)
// }

// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     gettingInfo()
//     creatingElements()
//     addingInfo()
// })

// const form = document.getElementById('myForm')
// const body = document.body

// form.addEventListener('submit', function(e){
//     e.preventDefault()
    
//     const randomNumber = Math.floor(Math.random() * 1000)
//     let par = document.createElement('p')

//     par.textContent = randomNumber
//     body.appendChild(par)
// })

// const myScoreP = document.getElementById('my-score');
// const compScoreP = document.getElementById('comp-score');
// const winsP = document.getElementById('wins');
// const btnsDiv = document.getElementById('btns');

// const choices = ['rock', 'paper','scissors'];

// let myScore = 0;
// let compScore = 0;

// btnsDiv.addEventListener('click', function(e) {
//     const btnId = e.target.id;

//     const compChoice = choices[Math.floor(Math.random() * choices.length)];

//     if(btnId === compChoice) {
//         winsP.textContent = 'Its a tie!';
//     } 
    
//     else if((btnId === "rock" && compChoice === "paper") || (btnId === "scissors" && compChoice === "rock") || (btnId === "paper" && compChoice === "scissors")) {
//         compScore++;
//         compScoreP.textContent = compScore;
//         winsP.textContent = 'You lost!';
//     } 
    
//     else {
//         myScore++;
//         myScoreP.textContent = myScore;
//         winsP.textContent = 'You won!';
//     }
// });




