const choices = ['rock', 'paper', 'scissors'];
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const newGameButton = document.getElementById('new-game');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        userChoiceDisplay.textContent = userChoice;
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice;

    if (userChoice === computerChoice) {
        resultDisplay.textContent = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
    } else {
        resultDisplay.textContent = 'You lose!';
    }
}

newGameButton.addEventListener('click', () => {
    userChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    resultDisplay.textContent = '';
});
