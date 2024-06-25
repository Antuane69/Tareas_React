import React from "react";
import "../stylesheet/Formulario.css"

export function Formulario(props){
    return(
        <form className="tarea-formulario">
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe la tarea"
                required
                name="texto"
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
}