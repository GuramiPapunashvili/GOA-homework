import { useState } from "react";

const useLightMode = (IState = false) => {
    const [lightMode,setLightMode] = useState(IState)

    const toggle = () =>{
        setLightMode(!lightMode)
    }

    return [lightMode,toggle]
}

export default useLightMode;