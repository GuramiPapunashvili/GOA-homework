class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log("This animal makes a sound.");
    }
}
  
class Dog extends Animal {
    speak() {
      console.log("Bark!");
    }
}
  
class Cat extends Animal {
    speak() {
      console.log("Meow!");
    }
}

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}
  
class Car extends Vehicle {
    constructor(make, model, fuelType) {
      super(make, model); 
      this.fuelType = fuelType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Fuel Type: ${this.fuelType}`);
    }
}

class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
}
  
  class Triangle extends Shape {
    constructor(base, height) {
      super("Triangle", 3);
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
}




// პირველი დავალება

let product = new Map([])

function addProduct(productName, price) {
  product.set(productName, price);
  console.log(`${productName} წარმატებით დაემატა ფასი: ${price}`);
}

addProduct('პური', 1.50)

//მეორე დავალება

function getPrice(productName){
    price = product.get(productName)
    console.log(`${productName} ღირს ${price}`)
}

getPrice('პური')

//მესამე დავალება

let movies = new Map([['Ready! player one', 2018], ['harry potter and the sorcerers stone', 2001], ['The Hunger Games', 2012]])

function checkMovie(movieName){
    let state = movies.has(movieName)
    if (state == true){
        console.log(`${movieName} is in films`)
    } else{
        console.log(`${movieName} is not in films`)
    }
}

checkMovie('The Hunger Games')

//მეოთხე დავალება

let athletes = new Map([['Lionel Messi', 'The GOAT'],['Cristiano Ronaldo', 'Most goals in the history of football'], ['Neymar JR', 'The Prince']])

function removeAthletes(athlete){
    athletes.delete(athlete)
    console.log(`${athlete} has been removed`)
}

removeAthletes('Lionel Messi')

//მეხუთე დავალება

let carBrands = new Map([['Toyota', 1000000], ['Ford', 800000], ['BMW', 500000], ['Mercedes', 600000], ['Honda', 700000]]);

function clear(){
    carBrands.clear()
    console.log('the map has been cleared')
}

clear()

//მეექვსე დავალება

let restaurants = new Map([['Olive Garden', 'Atlanta, GA'], ['Red Lobster', 'Miami, FL'], ['Cheesecake Factory', 'Los Angeles, CA'], ['Panda Express', 'New York, NY'], ['Chipotle', 'Chicago, IL']]);

function size(){
    console.log(restaurants.size)
}

size()

//მეშვიდე დავალება

let countryCodes = new Map([['US', 'United States'],['CA', 'Canada'],['GB', 'United Kingdom'],['FR', 'France'],['DE', 'Germany'],['IT', 'Italy'],['ES', 'Spain'],['JP', 'Japan'],['CN', 'China'],['IN', 'India']]);

function codeByName(country) {
    const codes = countryCodes.keys();
    const names = countryCodes.values();

    for (let name of names) {
        if (name === country) {
            const code = codes.next().value;
            console.log(`The code of ${country} is ${code}`);
            return;
        } else {
            codes.next();
        }
    }
    console.log(`Country ${country} not found.`);
}

codeByName('United States');

//მერვე დავალება

function printCountryNames() {
    const names = countryCodes.values();
    for (let name of names) {
        console.log(name);
    }
}

printCountryNames()

//მეათე დავალება

let drinks = new Map([
    ['Coca Cola', 140],
    ['Orange Juice', 110],
    ['Water', 0],
    ['Lemonade', 100],
    ['Beer', 150]
]);

drinks.forEach((calories, name) => {
    console.log(`Drink: ${name}, Calories: ${calories}`);
});
