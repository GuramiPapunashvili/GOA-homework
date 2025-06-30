import fs from 'fs'

process.stdin.on('data', (data) =>{
    const dataTrimmed = data.toString().trim()
    if (dataTrimmed ==='exit'){
        console.log('file saved')
        process.exit()
    }

    fs.appendFile('data.txt', dataTrimmed + '\n', 'utf-8', (err) => {
        if(err){
            console.log('error:', err)
        } else{
            console.log('added')
        }
    })
})