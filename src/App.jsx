import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/Home";
import Nav from './nav/Nav'
import Logo from "./logo";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  
  console.log(data);
  
  return (
    
   <>
            <Logo/>
            <Nav/>
            
            <div className="Stays"> 
            <h1>Stays in Findland</h1>
            </div>
            <div className="homegrid">
          {data.map((el, i) => (
            <div className="house" key={i}>
              <Home {...el} />
            </div>
          ))}
        </div>
      </>
  );
}

export default App;
