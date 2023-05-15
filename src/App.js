import logo from './logo.svg';
import './App.css';
import Ingresos from './Components/Ingresos';
import { getByTitle } from '@testing-library/react';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">

        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div id="root">
          <div class="containter">
            <div class="row">
              <div class="one-half column">
                <h2>Crear mi Cita</h2>
                <form>
                  <Ingresos/>
                </form>
              </div>

              <div class="one-half column">
              <h2>Administra tus citas</h2>
                <Citas Nombre="Blacky" Dueño="Jere" Fecha="2023-05-08" Hora="16:15" Sintomas="No está comiendo"/>
                <Citas Nombre="Nina" Dueño="Martin" Fecha="2021-08-05" Hora="08:20" Sintomas="Le duele la pierna"/>        
                <Citas Nombre="Sifon" Dueño="Flecha" Fecha="2023-06-10" Hora="09:24" Sintomas="Duerme mucho"/>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
