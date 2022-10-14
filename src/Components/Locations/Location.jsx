import "./Location.css";
import { useContext } from "react";
import { FaThermometerHalf,FaRegWindowClose,FaWind } from "react-icons/fa";
import { CardLocationContext } from "../../context/CardLocationContext";
import Jujuy from "../../assets/Jujuy.jpg"
import Salta from "../../assets/Salta.jpg"
const Location = ({ location }) => {
  const { id, zona, latitud, longitud, temperatura, velocidad_viento } = location;
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);
  
 const imagenes = {
  url1:'https://i.pinimg.com/564x/50/bf/af/50bfaf5f987a6659a4df164e04229b2c.jpg',
  url2:'https://i.pinimg.com/564x/c0/b1/1e/c0b11e2c95c8b91afec4292729630ca4.jpg',
  url3:'https://i.pinimg.com/564x/dc/f4/8f/dcf48f0099b37b881ede263a843d892c.jpg',
  url4:'https://i.pinimg.com/564x/cd/68/2a/cd682a9caba777be09b2834dd147b52c.jpg',
 }
 console.log("url1-----",imagenes.url1); 
 
 let url
  /*   if (zona ==="JUJUY"){
      foto = Jujuy     
    } else {
      if (zona ==="SALTA"){
        foto = Salta
      }
    }   */
    switch (zona) {
      case "JUJUY":
        url=imagenes.url1;
        break;
      case "SALTA":
        url=imagenes.url2;
        break;
      case "TUCUMAN":
        url=imagenes.url3;
        break;
      case "CATAMARCA":
        url=imagenes.url4;
        break;
      default:
        url=imagenes.url1;
        break;
    }
    //const foto = Jujuy
  
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
        <h1>{zona}</h1>
        <img src= {url} alt="foto" width="100%"  height="100%" />
        <h3 className="type">Lat = {latitud}°  Long = {longitud}°</h3>
        {/* <h3 className="type">Long = {longitud}°</h3> */}
        <h3 className="temperature"><FaThermometerHalf/> <span>Temp: {temperatura}°C</span> </h3>
        <h3 className="wind"><FaWind/> <span> Viento: {velocidad_viento}Km/h</span></h3>     
        <div className="Card-actions">
          <div className="Close" onClick={handleDel}>
            <FaRegWindowClose className="color" />
          </div>
        </div>
      </div>
    );
  };
export default Location;
