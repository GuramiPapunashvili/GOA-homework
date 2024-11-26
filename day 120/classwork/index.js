import {calc, filter} from './calculator.js'

const res = calc(2,5,'-')
const res2 = filter([1,2,3,4,5,6,7,8],(val)=>{
    return val % 2 == 0
})
console.log(res)
console.log(res2)