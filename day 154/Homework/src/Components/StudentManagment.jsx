import { useEffect, useState } from "react";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingStudent, setEditingStudent] = useState({
    name: "",
    lastname: "",
    age: "",
  });

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
    };

    setStudents([...students, student]);
    e.target.reset();
  };

  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  const editStudent = (index) => {
    setEditingIndex(index);
    setEditingStudent(students[index]);
  };

  const handleEditChange = (e) => {
    setEditingStudent({
      ...editingStudent,
      [e.target.name]: e.target.value,
    });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    const updatedStudents = students.map((student, index) =>
      index === editingIndex ? editingStudent : student
    );

    setStudents(updatedStudents);
    setEditingIndex(null);
    setEditingStudent({ name: "", lastname: "", age: "" });
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello {account.email}</h1>
          <button onClick={logout}>Log out</button>

          <div>
            <form onSubmit={editingIndex !== null ? updateStudent : addStudent}>
              <input
                type="text"
                name="name"
                placeholder="Student name"
                value={editingStudent.name}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Student lastname"
                value={editingStudent.lastname}
                onChange={handleEditChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Student age"
                value={editingStudent.age}
                onChange={handleEditChange}
                required
              />
              <button>{editingIndex !== null ? "Update Student" : "Add Student"}</button>
            </form>
          </div>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                    <button onClick={() => editStudent(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
};

export default StudentManagement;
