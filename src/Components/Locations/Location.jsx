import "./Location.css";
import { useContext } from "react";
import { FaThermometerHalf,FaRegWindowClose,FaWind } from "react-icons/fa";
import { CardLocationContext } from "../../context/CardLocationContext";

const Location = ({ location }) => {
  const { id, latitud, longitud, temperatura, velocidad_viento, zona } = location;
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);

  const handleDel = () => {
    //Quitar de tajeta
    setCardLocation(
      CardLocation.filter((loc) => loc.id !== id),
      CardLocation.map((card, indice) => (card.id = indice + 1))
    );
    }
    console.log("muestro antes quitar", CardLocation);    
    console.log("muestro locationcompo", location);
    console.log("muestro latitud", latitud);
    return (
      <div className="card-container">
       
        {/* <h1 className="type">Tarjeta Ubicacion n° {id}</h1> */}
        <h1 className="type">{zona}</h1>
        <img src="https://cdn.getyourguide.com/img/tour/5d934d7c061c4.jpeg/132.webp" alt="logo" width="100%" height="100%" />
        <h2 className="type">Latitud: {latitud}° </h2>
        <h2 className="type">Longitud: {longitud}°</h2>
        <h2 className="temperature"><FaThermometerHalf/> <span>{temperatura}°C</span> </h2>
        <h2 className="wind"><FaWind/> <span> {velocidad_viento}Km/h</span></h2>
      
       
        <div className="Card-actions">
          <div className="Close" onClick={handleDel}>
            <FaRegWindowClose className="color" />
          </div>
        </div>
      </div>
    );
  };
export default Location;
