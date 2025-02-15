import {react,useEffect,useState} from 'react';

const AdvancedToDo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('tasks');
        if(storedData){
            setTasks(JSON.parse(storedData))
        }
    },[])

        useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = e.target.task.value.trim();
        if (newTask){
            setTasks([...tasks, newTask]);
        }
        e.target.reset()
        

        
    }

    const handleRemove = (index) =>{
        setTasks(tasks.filter((task,taskIndex) => taskIndex !== index))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='task' type='text' placeholder='add todo...'/>
                <input type='submit'/>
            </form>

            <ul>
                {
                    tasks.map((task,index) => (
                        <li onClick={() => handleRemove(index)} key={index}>{task}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AdvancedToDo