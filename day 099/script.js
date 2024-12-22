// class User {
//     #userId;
//     #isValid;
  
//     static userCount = 0;
  
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.#userId = User.userCount + 1;
//       this.#isValid = this.#validateAge(age);
      
//       if (this.#isValid) {
//         User.userCount++;
//       }
//     }
  
//     get userInfo() {
//       return `${this.firstName} ${this.lastName}, Age: ${this.age}, ID: ${this.#userId}`;
//     }
  
//     set updateAge(newAge) {
//       if (this.#validateAge(newAge)) {
//         this.age = newAge;
//         console.log('Age updated successfully');
//       } else {
//         console.error('Invalid age update');
//       }
//     }
  
//     #validateAge(age) {
//       return age > 0
//     }
  
//     static getUserCount() {
//       return `Total registered users: ${User.userCount}`;
//     }
  
//     displayUser() {
//       if (this.#isValid) {
//         return this.userInfo;
//       } else {
//         return 'Invalid user data!';
//       }
//     }
//   }
  
//   const form = document.getElementById('registrationForm');
//   const userCountDisplay = document.getElementById('userCount');
//   const userListDisplay = document.getElementById('userList');
//   const errorMessage = document.getElementById('errorMessage');
  

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const age = parseInt(document.getElementById('age').value);
  
//     if (!firstName || !lastName || age <= 0) {
//       errorMessage.textContent = 'Please enter valid details';
//       return;
//     }
    
//     const newUser = new User(firstName, lastName, age);
    
//     if (newUser.displayUser() !== 'Invalid user data!') {
//       userCountDisplay.textContent = User.getUserCount();
//       const userElement = document.createElement('div');
//       userElement.textContent = newUser.displayUser();
//       userListDisplay.appendChild(userElement);
//       errorMessage.textContent = '';
//     } else {
//       errorMessage.textContent = 'User registration failed due to invalid data';
//     }
//   });






  class User {
    // Public fields
    username;
    
    // Private fields
    #password;
    #email;
  
    // Static private field (available only within the class)
    static #userCount = 0; 
  
    // Constructor to initialize public and private fields
    constructor(username, password, email) {
      this.username = username;
      this.#password = password;
      this.#email = email;
      
      // use the static private user count each time a new user is created
      User.#increaseUserCount();
    }
  
    // Public setter for password
    set password(newPassword) {
      this.#password = newPassword;
    }
  
    // Public getter for password
    get password() {
      return this.#password;
    }
  
    // Public setter for email
    set email(newEmail) {
      this.#email = newEmail;
    }
  
    // Public getter for email
    get email() {
      return this.#email;
    }
  
    // Public method that gives user information
    getUserInfo() {
      return `Username: ${this.username}, Email: ${this.#email}`;
    }
  
    // Static method (can be called directly on the class)
    static getUserCount() {
      return `Total users: ${User.#userCount}`;
    }
  
    // Static private method (only callable inside the class)
    static #increaseUserCount() {
      User.#userCount += 1;
    }
  }
  
  