import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //State de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    //Fijamos el proyecto actual
    proyectoActual(id);
    obtenerTareas(id);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
