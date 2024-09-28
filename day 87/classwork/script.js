// setInterval(function(){
//     const d = new Date()

//     console.log(d.getMinutes())
//     if(d.getMinutes() === 39){
//         clearInterval(d)
//     }
// },1000)


function change(){
let text2 = document.getElementsByClassName('text2') //using .getelementsbyclassname we store an element with the class name we inputted(in this case text2) in an object in this case in text2
let text3 = document.getElementsByTagName('p') //using .getElementsByTagName we store an element with the tag name we inputted(in this case p) in an object(in this case text3)

text2[0].innerHTML = 'this is text 2 changed'
text3[0].innerHTML = 'this is text 3 changed'

text3.parentElement.innerHTML = "this is text3's parent changed"
}
