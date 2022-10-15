import "./Location.css";
import { useContext } from "react";
import { FaThermometerHalf, FaRegWindowClose, FaWind } from "react-icons/fa";
import { CardLocationContext } from "../../context/CardLocationContext";

const Location = ({ location }) => {
  const { id, zona, latitud, longitud, temperatura, velocidad_viento, url } =location;
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);

  const handleDel = () => {
    //Quitar de tajeta
    setCardLocation(CardLocation.filter((loc) => loc.id !== id));
  }; 
  return (
    <div className="card-container">
      <h3>{zona}</h3>
      <br />
      <img src={url} alt="imagen" width="100%" height="100%" />
      <h4 className="type">Lat = {latitud}°</h4>
      <h4 className="type2">Long = {longitud}°</h4>
      <h3 className="temperature"><FaThermometerHalf /><span>{temperatura}°C</span></h3>
      <h3 className="wind"> <FaWind /><span>{velocidad_viento}Km/h</span></h3>
      <div className="Card-actions">
      <div className="Close" onClick={handleDel}><FaRegWindowClose className="color"/>
        </div>
      </div>
    </div>
  );
};
export default Location;
