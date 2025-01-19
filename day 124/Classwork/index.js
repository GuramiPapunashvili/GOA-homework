// const text = React.createElement("p", {id: 1, className: 2}, React.createElement("b", {className: 3},
// React.createElement("p",{className: 4}, "Hello")))
const P = () => {
    return (<div>
    <p id={1} className={2}>
        <b className={3}>
            <p className={4}>Hello</p>
        </b>
    </p>
    <button onClick={() => alert("Button clicked!")}>Click me</button>
    </div>);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(P);



