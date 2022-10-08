import './Location.css'
import { useContext,useEffect,useState} from "react";
import { TempContext } from "../../context/TempContext";
import { PlaceContext } from "../../context/PlaceContext";

const Location = () =>{
const { Place, setPlace } = useContext(PlaceContext);
const { Temp, setTemp } = useContext(TempContext);
const { latitude, longitude,timezone} = Place
const { temperature,windspeed } = Temp
const [CardLocation, setCardLocation] = useState([]) 
const cardNew = {
    zona: timezone,   
    latidud: latitude,
    longitud: longitude,
    temperatura:temperature,
    velocidad_viento:windspeed,
  }
 useEffect(()=>{
    
   setCardLocation([...CardLocation, cardNew])
   
  },[])
 // {console.log("muestro CardLocation",Temp)}
 return (
      
      <div className='tarjeta-container'>
          <h1 className='type'>Tarjeta Ubicacion</h1>
          <h3 className='type'>Zona: {timezone}</h3>
          <h3 className='type'>Latitud: {latitude}°</h3>
          <h3 className='type'>Longitud: {longitude}°</h3>
          <h3 className='type'>Temperatura: {temperature}°C</h3>
          <h3 className='type'>Velocidad del viento: {windspeed}Km/h</h3>
          {console.log("muestro CardLocation",CardLocation)}
      </div>
      
  );
}
export default Location