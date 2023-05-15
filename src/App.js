import logo from './logo.svg';
import './App.css';
import Ingresos from './Components/Ingresos';
import { getByTitle } from '@testing-library/react';
import Citas from './Components/Citas';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">

        <h1>ADMINISTRADOR DE PACIENTES</h1>
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
                  <Citas nombre="Blacky" dueno="Jere" fecha="2023-05-08" hora="16:15" sintomas="No está comiendo"/>
                  <Citas nombre="Nina" dueno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>        
                  <Citas nombre="Sifon" dueno="Flecha" fecha="2023-06-10" hora="09:24" sintomas="Duerme mucho"/>
              </div>

            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
