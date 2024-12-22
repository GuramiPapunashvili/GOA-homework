function startToEnd(start,end){
    arr = []
    for(let i = start; i < end; i++){
        arr.push(i)
    }

    return arr
}

function calculateAverage(arr){
    sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
}

function toDatabase(){
    let dataBase = []
    let form = document.getElementById('formOne')

    form.addEventListener("submit",function(e){
        e.preventDefault();
    
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
    
        const acc = new Person(firstname,lastname,gmail)
        dataBase.push(acc)
    
        console.log(dataBase)
    })
}