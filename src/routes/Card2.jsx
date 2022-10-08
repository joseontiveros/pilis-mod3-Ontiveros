import { useEffect } from "react"
import { useState } from "react"


//const Card = ({card,temp}) =>{
export const Card2 = ({dato}) => {
    
    const [dato1, setDato1] = useState([]) 
    const {latitude,longitude}=dato
    //const {temperature}=current_weather
    const cardNew = { 
    Latitud: latitude,
    Longitud:longitude,
    //temperatura:current_weather,
  }
  console.log("CardNew",cardNew);
 
  useEffect(()=>{
    
    setDato1([...dato1, cardNew])
   
  },[])
  console.log("dato1kkk",dato1);
}


