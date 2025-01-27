import React, { useState } from "react";

const studentInput = () => {
    const formStyle = {
        border : "2px solid black"
    }
    const [students, setStudents] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.student.value;
        const score = e.target.score.value;
        const studentX = {
            name: name,
            score: score,
        };
        setStudents([...students, studentX]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="student"
                    placeholder="Enter the student's name"
                    required
                />
                <input
                    type="number"
                    name="score"
                    placeholder="Enter the student's score"
                    required
                />
                <input type="submit" />
            </form>
            <table style={{
                        border: '2px solid black',
                        borderCollapse : 'collapse'
                    }}>
                <tr>
                    <td style={formStyle}>Name</td>
                    <td style={formStyle}>Score</td>
                    <td style={formStyle}>Pass/Fail</td>
                </tr>
                {students.map((studentInfo) => {
                    return (
                            <tr style={formStyle}>
                                <td style={formStyle}>
                                {studentInfo.name}</td>
                                <td style={formStyle}>
                                {studentInfo.score}</td>
                                <td style={formStyle}>
                                {studentInfo.score >= 50 ? "Pass" : "Fail"}
                                </td>
                            </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default studentInput;
