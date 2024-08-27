//შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება 1 პარამეტი სახელად border (ზღვარი) ფუნქციამ 0-იდან border-ის ჩათვლით უნდა გაიგოს
//ყველა რიცხვი if პირობითი განცხადების საშვალებით, ეს ყველა ლუწი რიცხვი უნდა შევკრიბოთ და დავაბრუნოთ

function evenSum(border){
    let sum = 0
    for(let i = 0; i < border; i++){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}

console.log(evenSum(7))

//შექმენით for ციკლი რომლითან 20-იდან 0-ის ჩათვლით ყველა რიცხვს დაბეჭდავთ

function upToTwenty(){
    for(let i = 20; i > -1; i--){
        console.log(i)
    }
}

console.log(upToTwenty())

//შექმენით for ციკლი რომელიც 0-იდან 10-ის ჩათვლით ყველა ლუწ რიცხვს დაბეჭდავს if-ის გამოყენების გარეშე

function evenWithoutIf(){
    for(let i = 0; i < 11; i+=2){
        console.log(i)
    }
}

console.log(evenWithoutIf())

//შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, 
//ჩვენი დავალებაა რომ შევქმნათ ახალი მასივი შემდეგ მასივში დავამატოთ 0-იდან border რიცხვის ჩათვლით და დავარუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა
//გადავცემთ შემდეგ ფუნქციას calculateSum, თქვენი დავალებაა რომ for ციკლის საშვალებით გამოვიანგარიშოთ ყველა რიცხვის ჯამი და დავაბრუნოთ

function generateEven(border){
    arr = []
    for(let i = 0; i < border; i++){
        if(i % 2 == 0){
            arr.push(i)
        }
    }
    return arr
}

function calculateSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum
} 

const numsType = [];

for(let i = 0; i < 10; i++) {
    const numType = {
        value: i,
        type: ''
    }

    if(i % 2 === 0) {
        numType.type = 'Even';
    } else {
        numType.type = 'Odd';
    }

    numsType.push(numType);
}


console.log(numsType);

let guess;
let tries = 3;

while (guess !== 'gurami123' && tries > 0){
    guess = prompt('please input your password, you have ' + tries + ' tries left')
    tries--
}
if (tries > 0){
    alert("acces granted")
} else{
    alert("you ran out of tries, denied")
}


