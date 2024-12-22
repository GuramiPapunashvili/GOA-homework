const myform = document.getElementById("myform")
data = []
myform.addEventListener("submit",(e) =>{
    e.preventDefault()
    const email = myform.email.value
    const pass = myform.pass.value
    const acc = {email,pass}
    if(data.incliudes(acc)){
        alert("Account already exists")
    } else {
        data.push(acc)
        localStorage.setItem("accounts",JSON.stringify(data))
    }
})