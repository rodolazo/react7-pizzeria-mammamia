import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";
//import data from "../../pizzas.js";
import {useState, useEffect, useContext} from 'react';
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);  
  const {addToCart} = useContext(CartContext);

  useEffect( () => {
    const obtenerDatos = async () => {
      const respuesta = await fetch('http://localhost:5000/api/pizzas');
      const datos = await respuesta.json();
      setPizzas(datos);      
    };
    obtenerDatos();
  }, []);

  return (
      <>        
        <Header/>
        <div className="cards">
          {pizzas.map((item)=>(
            <CardPizza key={item.id} pizza={item} addCarrito={() => addToCart(item)}></CardPizza>
            ))}
        </div>
      </>
    )
  
};

export default Home;
