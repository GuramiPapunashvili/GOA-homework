// 1. Create an Object
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
console.log(person);

// 2. Access Object Properties
console.log(person.name);
console.log(person.city);

// 3. Destructuring an Object
let { name, age } = person;
console.log(name);
console.log(age);

// 4. Nested Object Destructuring
let student = {
    name: "Alice",
    age: 21,
    address: {
        city: "Los Angeles",
        country: "USA"
    }
};
let { city, country } = student.address;
console.log(city);
console.log(country);

// 5. Default Values in Destructuring
let product = {
    name: "Laptop",
    price: 1000
};
let { name: productName, category = "general" } = product;
console.log(productName);
console.log(category);

// 6. Destructure from Function Parameters
function displayCar({ brand, model, year }) {
    console.log(brand, model, year);
}
displayCar({ brand: "Toyota", model: "Camry", year: 2020 });

// 7. Rest Operator with Objects
let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg"
};
let { year: bookYear, publisher, ...bookDetails } = book;
console.log(bookDetails);

// 8. Spread Operator with Objects
let user = {
    name: "Jane",
    age: 28
};
let location = {
    city: "San Francisco",
    country: "USA"
};
let mergedUser = { ...user, ...location };
console.log(mergedUser);

// 9. Rest Operator with Function Arguments
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));

// 10. Spread Operator with Arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);
