import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";
import Axios from "axios";

const Cupcakes = ({ peticion, title }) => {
    
    const [cupcakes, setCupcakes] = useState()

    useEffect(()=>{
        Axios.get(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(({ data }) => setCupcakes(data))
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