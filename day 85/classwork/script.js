let arr = ['city', 'Liverpool', 115] 

arr.push('Charge') //.push allows us to add an element at the end of an array
arr.pop('Charge') //.pop allows us to remove an element at the end of an array
arr.shift('Best') //.shift allows us to add an element at the start of an array
arr.unshift('Best') //.unshift allows us to remove an element at the start of an array

const slicedArr = arr.slice(0,2) //.slice allows us to output elemnts from first inputed index to the last inputted index
const splicedArr = arr.splice(0,1) 
//.splice method takes two arguments first being an index which indicates the index we start the output from and second being the amount of elements we want to output

console.log(arr)
console.log(slicedArr)
console.log(splicedArr)




const teams = ['Liverpool', 'United', 'City', 'Arsenal', 'Liverpool']

const index = teams.indexOf('City') 
//.indexOf outputs the index which our argument stand at in the list, we can also add a second argument which is gonna be an index it starts from
const lastIndex = teams.lastIndexOf('Liverpool') 
//similar to .indexOf .lastIndexOf also outputs the index our arguments stand on however this time if there is more than one element in the list
//that matches our argument it will output the index of the last one
const includes = teams.includes('Cheslsea')
//.includes outputs either true or false if the argument we input is in the list it will output true if it isnt it will output false
//we can also add another argument which is gonna be an index it starts from

console.log(index,lastIndex,includes)




const nums = [1,2,45,27,12,190]

console.log(nums.sort(function(a,b){
    return a - b
})) //this will return the array listed from the least to the most

console.log(nums.sort(function(a,b){
    return b - a
})) // this will return the array listed from the most to the least


function manualIndexOf(value, arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i
        }
    }

    return -1
}

console.log(manualIndexOf('Liverpool', ['city', 'Liverpool', 115]))


function manualReverse(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i])
    }

    return result
}

console.log(manualReverse([1,2,3,4,5,6,7]))

function manualSlice(arr, num1, num2){
    result = []
    for(let i = 0; i < arr.length; i++){
        if(i == num1 && i >= num2){
            result.shift(arr[i])
        }
    }

    return result
}

console.log(manualSlice(['city', 'Liverpool', 115],0,2))



function manualFilter(arr,innerFunc){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(innerFunc(arr[i])){
            result.push(arr[i])
        }
    }

    return result
}

console.log(manualFilter([1,2,3,4,5,6,7,8,9,10],function(value){
    return value % 2 == 0
}))
