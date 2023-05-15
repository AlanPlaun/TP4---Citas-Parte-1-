import React,{Fragment} from "react";

function Ingresos({Nombre},{Dueño},{Fecha},{Hora},{Sintomas}){
    return (
      <Fragment>
        <div class="cita">
            <p>Mascota: <span>{Nombre}</span></p>
            <p>Dueño: <span>{Dueño}</span></p>
            <p>Fecha: <span>{Fecha}</span></p>
            <p>Hora: <span>{Hora}</span></p>
            <p>Sintomas: <span>{Sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
      </Fragment>
    );
  }
  
  export default Ingresos;