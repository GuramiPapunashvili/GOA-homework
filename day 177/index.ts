//დააბრუნე ორჯერ დიდი რიცხვი  
//დაწერე ფუნქცია, რომელიც მიიღებს ერთ `number` ტიპის პარამეტრს და დააბრუნებს ამ რიცხვის ორჯერ მეტ მნიშვნელობას.
function double(num: number): number{
    return num * 2
}

//**სტრინგის მოკლე ვერსია**  
//- დაწერე ფუნქცია, რომელიც მიიღებს `string` ტიპის პარამეტრს და დააბრუნებს მხოლოდ პირველ 5 სიმბოლოს.  
//*(თუ სტრინგი 5-ზე ნაკლებია, დააბრუნე როგორც არის.)*
function shorterString(str: string): string{
    if(str.length <= 5){
        return str
    }
    return str.slice(0,4)
}

//**ამოწმებს რიცხვი ლუწია თუ კენტი**  
//- დაწერე ფუნქცია, რომელიც მიიღებს `number`-ს და დააბრუნებს `"ლუწია"` ან `"კენტია"` სტრინგს.

function evenOrOdd(num: number): string{
    if(num % 2 == 0){
        return 'even'
    }
    return 'odd'
}

//**ნულების მასივის გენერირება**  
//- დაწერე ფუნქცია, რომელიც მიიღებს `length: number` პარამეტრს და დააბრუნებს მასივს, რომელშიც მხოლოდ `0`-ებია ამ სიგრძით.

function onlyZeros(amount: number): number[]{
    let res: number[] = []
    for(let i = 0; i < amount; i++){
        res.push(0)
    }
    return res
}