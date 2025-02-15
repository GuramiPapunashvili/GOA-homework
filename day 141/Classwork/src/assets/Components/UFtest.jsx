import { useEffect, useState } from "react";

const UFTest = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        console.log('Task Added')
    },[tasks])

    const handleAdd = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        setTasks([...tasks, task])
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" name="task" placeholder="add todo"/>
                <input type="submit"/>
            </form>
            <ul>
                {
                    tasks.map((task,index) => {
                        return (<li key={index}>{task}</li>)
                    })
                }
            </ul>
        </div>
    )
};

export default UFTest;