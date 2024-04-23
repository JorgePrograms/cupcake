import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({ peticion, title }) => {
    
    const [cupcakes, setCupcakes] = useState()

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(response => response.json())
        .then(data => setCupcakes(data))
        .catch(e=> console.log(e))
    },[peticion])
    
    
    return(
        <div className="main-cupcakes">
           { title && <h1>Página de cupcackes</h1> }
           {
            cupcakes ? (
                <section className="main-conatiner-cupcakes">
                {
                cupcakes.map(({
                    id,
                    descripcion,
                    imagen,
                    sabor,
                    color,
                    precio
                })=> (
                <Cupcake
                    key={id}
                    imagen={imagen}
                    descripcion={descripcion}
                    sabor={sabor}
                    color={color}
                    precio={precio}
                />
            ))
                }
                </section>
            ) : (<span>Cargando...</span>)
           }
           
        </div>


    );
}

export default Cupcakes