import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(() => Number(localStorage.getItem("timer")) || 0);
    const [isRunning, setIsRunning] = useState(() => JSON.parse(localStorage.getItem("isRunning")) || false);

    useEffect(() => {
        if (!isRunning || time <= 0) return;

        const interval = setInterval(() => {
            setTime((prevTime) => {
                const newTime = prevTime > 0 ? prevTime - 1 : 0;
                localStorage.setItem("timer", newTime);
                if (newTime === 0) setIsRunning(false);
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, time]);

    useEffect(() => {
        localStorage.setItem("isRunning", JSON.stringify(isRunning));
    }, [isRunning]);

    const handleTimerStart = (e) => {
        e.preventDefault();
        const initialTimer = Number(e.target.time.value);
        if (initialTimer > 0) {
            setTime(initialTimer);
            localStorage.setItem("timer", initialTimer);
            setIsRunning(true);
        }
    };

    const handleStopTimer = () => {
        setIsRunning(false);
    };

    const handleContinueTimer = () =>{
        setIsRunning(true);
    }

    return (
        <div>
            <form onSubmit={handleTimerStart}>
                <input name="time" type="number" placeholder="Input a time" min="1" />
                <input type="submit" value="Start Timer" />
                <button type="button" onClick={handleStopTimer}>Stop Timer</button>
                <button type="button" onClick={handleContinueTimer}>Continue Timer</button>
            </form>
            <p>{time}</p>
        </div>
    );
};

export default Timer;
