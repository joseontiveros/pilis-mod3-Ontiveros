import './App.css';
import { useEffect, useState,useContext } from "react";
import { getLocation } from "./service";
import Locations from "./Components/Locations/Locations";
import CardCreation from "./routes/Card/CardCreation";
import { PlaceContext } from "./context/PlaceContext";
import { TempContext } from "./context/TempContext";
//import {Routes, Route} from 'react-router-dom'
function App() {
  
  const latitude = -23.577833818613954;
  const longitude = -65.39580392353476;
  const {Temp,setTemp} = useContext(TempContext)   
  const {Place, setPlace} = useContext(PlaceContext)  
 // const [temp, setTemp] = useState([]);

  useEffect(() => {
    //console.log("useEffect");

    getLocation(latitude, longitude)
      .then((data) => setPlace(data))
      .catch((err) => console.log(err));
    getLocation(latitude, longitude)
      .then((data) => setTemp(data.current_weather))
      .catch((err) => console.log(err));
  }, []);

  return (


    <div className="App">
     
       {/*  {console.log("ubicacion", Place.current_weather)} */}
       {/*  <Locations/>       */}
        <CardCreation/>
    
    </div>
  );
}


           
            
export default App;
