import {react,useEffect} from 'react';

const LogAtAnyChange = () =>{
    useEffect(()=>{
        console.log('Change has occured')
    })

    return(
        <div>
            <h1>Change</h1>
        </div>
    )
}

export default LogAtAnyChange;