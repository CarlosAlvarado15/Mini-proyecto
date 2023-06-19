import React from 'react'
import {useState} from "react";
import "./Nav.css";

function Nav() {
  
  const [location, setLocation] = useState("");
  
    const OPCIONES = [
      { id: 1, city: "Helsinki, Finland" },
      { id: 2, city: "Turku, Finland" },
      { id: 3, city: "Oulu, Finland" },
      { id: 4, city: "Vaasa, Finland" },
    ];
  
    function insertOptcion(parameter) {
      setLocation(parameter);
    }

  return (
    

      <div id="contenedor">
        
        <div id="contenedor-centrado">
          <nav>
            <div>
              <p>
                <b>LOCATION</b>
              </p>
              <input type="text" defaultValue={location} />
            </div>
            <div>
              <input type="number" defaultValue="" disabled />
            </div>
            <div>
              <button>
                <img
                  src="src\img\search_icon(4).svg"
                  height={17.05}
                  width={17.06}
                  alt="lupa"
                />
                Search
              </button>
            </div>
          </nav>
          <div id="div-toggles">
            <div id="toggle1">
              <ul>
                {OPCIONES.map((op) => (
                  <li key={op.id} onClick={() => insertOptcion(op.city)}>
                    {op.city}
                  </li>
                ))}
              </ul>
            </div>
            <div id="toggle2"></div>
          </div>
        </div>
      </div>
    
  );
    
  
}

export default Nav





