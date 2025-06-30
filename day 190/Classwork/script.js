// import readline from 'readline';
// let arr = []

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// const addNumber = (num) => {
//   if (arr.length < 10) {
//     arr.push(num);
//     input();
//   } else {
//     rl.close();
//     console.log('Done:', arr);
//   }
// };

// const input = () => {
//     rl.question('', (input) => {
//         addNumber(Number(input))
//     })
// }

// input();

import { stdin, stdout } from 'process';

const correctNumber = Math.round((Math.random() * 10))
console.log(correctNumber)

stdout.write('Guess a number 1-10: ')

stdin.on('data', (num) => {
    const guess = Number(num)
  if (guess === correctNumber) {
    console.log('Correct!');
    process.exit();
  } else {
    stdout.write('Try again: ');
  }
})

