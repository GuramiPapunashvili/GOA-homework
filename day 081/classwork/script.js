function takeInfo(){
    const name = document.getElementById('Name').value;
    const lastname = document.getElementById('Lastname').value;
    const gmail = document.getElementById('Gmail').value;
    let info = []

    const toPush = {
        email: gmail,
        name: name,
        lastname: lastname,
    }

    info.push(toPush);

    console.log(info)

}