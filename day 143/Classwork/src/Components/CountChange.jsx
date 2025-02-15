import {React,useState,useEffect} from 'react';

const CountChange = () => {
    const[count,setCount] = useState(0)

    useEffect(()=>{
        console.log('Count Changed')
    },[count])

    return(
        <button onClick={() => setCount(count+1)}>{count}</button>
    )
}

export default CountChange;