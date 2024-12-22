function manualFilter(arr,innerFunc){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(innerFunc(arr[i])){
            result.push(arr[i])
        }
    }

    return result
}