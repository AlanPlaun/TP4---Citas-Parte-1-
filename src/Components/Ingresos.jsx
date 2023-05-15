import React from "react";

function Ingresos(){
    return (
      <Fragment>
        <label>Nombre Mascota</label>
          <input type="text" class="u-full-width" placeholder="Nombre Mascota"/>
        <label>Nombre Dueño</label>
          <input type="text" class="u-full-width" placeholder="Nombre Dueño"/>
        <label>Fecha</label>
          <input type="date" class="u-full-width" placeholder="Fecha" value=""/>
        <label>hora</label>
        <input type="time" class="u-full-width" value=""/>
        <label>Sintomas</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </Fragment>
    );
  }
  
  export default Ingresos;