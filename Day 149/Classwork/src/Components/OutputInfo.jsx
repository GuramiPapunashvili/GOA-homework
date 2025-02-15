import { useEffect } from "react"
import { useState } from "react"

const OutputInfo = () =>{
    const [curInfo,setCurInfo] = useState([])

    useEffect(() =>{

    },[curInfo])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newInfo = {
            'email' : e.target.email.value ,
            'firstname' : e.target.firstname.value,
            'lastname' : e.target.lastname.value,
            'pass' : e.target.pass.value,
        }
        setCurInfo(newInfo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Please input your email"/>
                <input type="text" name="firstname" placeholder="Please input your firstname"/>
                <input type="text" name="lastname" placeholder="Please input your lastname"/>
                <input type="text" name="pass" placeholder="Please input your pass"/>
                <input type="submit"/>
            </form>
            <div>
                <h1>Current user info</h1>
                <p>Email: {curInfo.email}</p>
                <p>First Name: {curInfo.firstname}</p>
                <p>Last Name: {curInfo.lastname}</p>
                <p>Password: {curInfo.pass}</p>
            </div>
        </div>
    )
}

export default OutputInfo;