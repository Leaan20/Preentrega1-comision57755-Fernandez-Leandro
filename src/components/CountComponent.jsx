//se importa el hook useState de React
import { useState } from "react"

export default function CountComponent() {

    //Utilizar Hooks (forma en que React maneja los estados reactivos)

    const [count, setCount] = useState(0);//valor inicial es 0

    const handleClick = () => {
        setCount(count + 1);
    };


    return(
        <>
            <h4>Contador</h4>
            <p>{count}</p>
            <button onClick={handleClick}> + </button>
        </>
    );
}