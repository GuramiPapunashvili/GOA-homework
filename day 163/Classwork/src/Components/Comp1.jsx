import useFormHandeling from "../Hooks/useFormHandeling";
// import useLightMode from "../Hooks/useLightMode";

// const Comp1 = () =>{
//     const [lightMode, toggle] = useLightMode();
//     return  (
//         <div style={{width:200,height:200,backgroundColor: lightMode ? 'white' : 'black'}}>
//             <button         style={{
//             color: lightMode ? "black" : "white",
//             backgroundColor: lightMode ? "white" : "gray",
//             }} onClick={toggle}>Toggle Color</button>
//         </div>
//     )
// }

const Comp1 = () => {
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

export default Comp1;