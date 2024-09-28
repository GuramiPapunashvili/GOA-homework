numbers = [1,2,3,4,5,6,7]

console.log(numbers.reduce((acc,cur) =>  acc + cur, 0))

function manualReduce(arr,acc,func){
    sum = 0
    for(const value of arr){
        sum += func(acc,value)
    }

    return sum
}

console.log(manualReduce(numbers,0,(acc,val)=> acc + val))


nums = [1,2,3,4,5,6,7,8,9,10,11,11,10]

console.log(nums.map(num => {
    if (num % 2 == 0){
        return num * 2
    } else {
        return num
    }
} ))

function manualMap(func,arr){
    result = []
    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i]))
    }
}

console.log((val) =>{
    if (val % 2 == 0){
        return val * 2
    } else{
        return val
    }
}, nums)


function manualFilter(arr, func) {
    const result = []; // New array to hold filtered values

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) { // Call the callback function
            result.push(arr[i]); // If true, add the item to the result array
        }
    }

    return result; // Return the new array
}

console.log(manualFilter(numbers, num => {
    const count = manualFilter(numbers, n => n === num).length; // Count occurrences
    return count === 2; // Return only those numbers that appear exactly twice
}))



