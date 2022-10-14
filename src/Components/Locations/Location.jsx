import "./Location.css";
import { useContext } from "react";
import { FaThermometerHalf,FaRegWindowClose,FaWind } from "react-icons/fa";
import { CardLocationContext } from "../../context/CardLocationContext";

const Location = ({ location }) => {
  const { id, zona, latitud, longitud, temperatura, velocidad_viento, url } = location;
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);
 
  const handleDel = () => {
    //Quitar de tajeta
    setCardLocation(
      CardLocation.filter((loc) => loc.id !== id),
      //reinicio los indices de las tarjetas
    //  CardLocation.map((card, indice) => (card.id = indice + 1))
    );
    }
    console.log("muestro antes quitar", CardLocation);    
    console.log("muestro locationcompo", location);
    console.log("muestro latitud", latitud);
    return (
      <div className="card-container">
       
        {/* <h1 className="type">Tarjeta Ubicacion n° {id}</h1> */}
        <h1>{zona}</h1>
        <img src= {url} alt="foto" width="100%"  height="100%" />
        <h4 className="type">Lat = {latitud}°</h4>
        <h4 className="type2">Long = {longitud}°</h4>
        <h3 className="temperature"><FaThermometerHalf/><span>{temperatura}°C</span> </h3>
        <h3 className="wind"><FaWind/><span>{velocidad_viento}Km/h</span></h3>     
        <div className="Card-actions">
          <div className="Close" onClick={handleDel}>
            <FaRegWindowClose className="color" />
          </div>
        </div>
      </div>
    );
  };
export default Location;
