import React, { Fragment, useState, useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //State del proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    agregarProyecto(proyecto);
    console.log(proyecto);

    //reinicamos formulario

    guardarProyecto({
      nombre: "",
    });
  };

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          ></input>

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
