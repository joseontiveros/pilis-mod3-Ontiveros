import './Locations.css'
import Location from './Location';
//import { useState } from "react";

 const Locations = ({ locations,temp }) => {
  return (
    <div className='grid'>
      <Location  location={locations} temp={temp}/>      
    </div>
  );
}

export default Locations
 
