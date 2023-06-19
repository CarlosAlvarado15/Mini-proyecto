import React from "react";
import "./Nav.css";
function Nav() {
  return (
          <div id="App">
        <div id="contenedor">
          <div id="contenedor-centrado">
            <nav>
                <div>
                  <p>
                    <b>LOCATION</b>
                  </p>
                  <input type="text" defaultValue="Test" />
                </div>
                <div className="second-child">
                  <p id="Location">
                    <b>LOCATION</b>
                  </p>
                  <input type="text" defaultValue="Test" />
                </div>
                <div>
                 <button> <img src="src\img\search_icon(4).svg" height={17.05} width={17.06} alt="lupa" />Search </button>
                </div>
              
            </nav>
            <div>{/* aqui colocar las opciones */}</div>
          </div>
        </div>
      </div>
    
  );
}

export default Nav;
