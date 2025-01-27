import React from "react";
import {useState} from 'react';

const InputField = () =>{
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);  

    const handleAddTask = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue("");
    }

    const handleClearTasks = () =>{
        setTodoList([]);
    }
    return (
        <div>
            <input
            type="text" 
            placeholder="Enter your task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            />
            <input onClick={handleAddTask} type="submit"/>
            <button onClick={handleClearTasks}>Clear</button>
        
            <div className="Tasks">
                <ul>
                      {todoList.map((item, index) => (
                        <div>
                            <li key={index}>{item}</li>
                        </div>
                      ))}
                </ul>
            </div>
        </div>
    );
}

export default InputField;