import useFormHandeling from "../Hooks/useFormHandeling";
// import useLightMode from "../Hooks/useLightMode";

// const Comp2 = () =>{
//     const [lightMode, toggle] = useLightMode();
//     return  (
//         <div style={{width:200,height:200,backgroundColor: lightMode ? 'white' : 'black'}}>
//             <button onClick={toggle}>Toggle Color2</button>
//         </div>
//     )
// }

// export default Comp2;

const Comp2 = () => {
    const [info, handleSubmit] = useFormHandeling();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <input type="text" placeholder="Username" name="Username" />
                <input type="text" placeholder="Password" name="Passwork" />
                <input type="submit" />
            </form>

            <p>
                {
                    info && Object.values(info).map((value, index) => (
                        <div key={index}>{value}</div>
                    ))
                }
            </p>
        </>
    );
};


export default Comp2;