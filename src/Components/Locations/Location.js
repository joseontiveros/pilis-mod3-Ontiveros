import './Location.css'
import { useContext,useEffect,useState} from "react";
import { TempContext } from "../../context/TempContext";
import { PlaceContext } from "../../context/PlaceContext";
import { FaRegWindowClose } from 'react-icons/fa';
import { CardLocationContext } from "../../context/CardLocationContext";
const Location = ({location}) =>{
  const { id,latitud,longitud,temperatura,velocidad_viento,zona} = location
  const {CardLocation, setCardLocation} = useContext(CardLocationContext);
  const handleDel = () => {
    //Quitar de tajeta
    setCardLocation(
      (CardLocation.filter((loc) => loc.id !== id )
    //  CardLocation.filter((loc,indice) => loc.id = indice )
      ))
    
    /* setCardLocation(
       CardLocation.map((card,indice)=>{
         card.id = indice+1
          })) */
   // console.log("cardmodificado",CardLocation);
  }
  /* const { Temp, setTemp } = useContext(TempContext);
const { Place, setPlace } = useContext(PlaceContext);
const { temperature,windspeed } = Temp
const { latitude, longitude,timezone} = Place
let mostrar
const [CardLocation, setCardLocation] = useState([]) 
const cardNew = {
    zona: timezone,   
    latidud: latitude,
    longitud: longitude,
    temperatura:temperature,
    velocidad_viento:windspeed,
  }
  {console.log("muestro CardNewantes", cardNew)}
 useEffect(()=>{
    
   setCardLocation([...CardLocation, cardNew])
   
  },[temperature])
 {console.log("muestro CardNew", cardNew)}
 {mostrar = CardLocation.map((card)=>card.temperatura)}
 console.log("muestro card",mostrar)} */
 console.log("muestro locationcompo",location)
 console.log("muestro latitud",latitud)
 return (
 
    
      <div className='card-container'>
          <div className='Card-actions'>
            <div className='Close' onClick={handleDel}>            
                  <FaRegWindowClose className='color'/>
            </div>
          </div> 
          <h1 className='type'>Tarjeta Ubicacion n° {id}</h1>
          <h3 className='type'>Zona: {zona}</h3>
          <h3 className='type'>Latitud: {latitud}°</h3>
          <h3 className='type'>Longitud: {longitud}°</h3>
          <h3 className='type'>Temperatura: {temperatura}°C</h3>
          <h3 className='type'>Velocidad del viento: {velocidad_viento}Km/h</h3>  

      </div>
  
 
      
      
      
  );
}
export default Location