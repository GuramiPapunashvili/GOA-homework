//უბრალოდ გამოაქვს ტექსტი
console.log('hello')
// assert ამოწმებს პირობას და თუ არასწორია, აჩვენებს შეცდომას
console.assert(10 < 5, "10 არ არის ნაკლები 5-ზე");
//გვიჩვენებს ობიექტს ცხრილის სახით
console.table([{name: 'Gurami', age: 17}, {name: 'Giorgi', age: 15}])

// console.log(process)

console.log(`this process used: ${process.memoryUsage().heapUsed/1024/1024} megabyts`);
console.log(Number(process.argv[1]) + Number(process.argv[2]) + Number(process.argv[3]))