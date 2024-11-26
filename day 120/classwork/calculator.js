
export function calc(num1,num2,op){
    switch(op){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

export function filter(arr,func){
    let res = []
    for(let i = 0; i<arr.length;i++){
        if(func(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

// ესეც შეიძლება ==> export {calc, filter}