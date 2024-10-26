class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    displayInfo() {
        console.log(`Name: ${this.name}, email: ${this.email}`);
    };
    static compareUsers(user1, user2) {
        return user1.email === user2.email
    };
};

const user1 = new User("Luka", "luka123@gmail.com");
const user2 = new User("Anna", "anna123@mail.com");

user1.displayInfo();
user2.displayInfo();

console.log(User.compareUsers(user1, user2));

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    set price (price) {
        if(price > 0) {
            this._price = price;
        } else {
            console.log("Price can't be negative");
        };
    };

    get price () {
        return this._price;
    }
};

let product1 = new Product("Laptop", 1250);

console.log(product1.price);
