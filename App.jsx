import { useState } from "react";
import Comp from "./Components/Comp";

export default function App (){
    
    const [componente, setComponente] = useState(false)

    return (

        <>
           <h1>Ciclo de Vida</h1>
           {componente ? <Comp/> : ""}
           <button onClick={() => setComponente(!componente)}>
            {componente ? "Desmontar" : "Montar"}
           </button>
        </>

    );
}