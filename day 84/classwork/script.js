// function Person(firstname,lastname){
//     this.firstname = firstname
//     this.lastname = lastname
// }

// const person1 = new Person('Guram','Papunashvili')
// console.log(person1)

// classwork 1

let dataBase = []
let form = document.getElementById('formOne')

function Person(firstname,lastname,gmail){
    this.firstname = firstname
    this.lastname = lastname
    this.gmail = gmail
}

form.addEventListener("submit",function(e){
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const acc = new Person(firstname,lastname,gmail)
    dataBase.push(acc)

    console.log(dataBase)
})
