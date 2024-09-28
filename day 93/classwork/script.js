let max = 5 //let creates a variable that is mutable(meaning it can be changed) and has a block scope(meaning it can only be used where it is decleared)
const min = 2 //const creates a variable that is immutable(meaning it cant be changed) and also has a block scope
var lol = 7//var is the is the oldest way to declare a variable and it is mutable, var has a function scope, meaning we can declare the var in a block and still use it outside of it

//number one
const cube = (num) => num ** 3;
console.log(cube(5))

//number two
const sum = (a, b) => a + b;
console.log(sum(15,25))

//number three
const msg = () => "Learning JS";
console.log(msg())

//number four
const evenOrOdd = (num) => {
    if (num % 2 === 0){
        return `${num} is even`
    }else{
        return `${num} is odd`
    }
}
console.log(evenOrOdd(15))

//number five
const multiply = (a, b = 1) => a * b;
console.log(multiply(5))

//number six
const createPerson = (name, surname) => ({ name, surname });
console.log(createPerson('Guram', 'Papunashvili'))

//number nine
const product = (a, b) => {
    const multiply = (x, y) => x * y;
    return multiply(a, b);
};
console.log(product(15,1))

//number ten
const sumArray = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};
console.log(sumArray([1,2,3,4,5,6,7]))



