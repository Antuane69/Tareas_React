import React from "react";
import '../stylesheet/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai"

function Tarea({ texto, estatus }) {
  return(
    <div className={estatus ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-icono">
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  )
}

export default Tarea;