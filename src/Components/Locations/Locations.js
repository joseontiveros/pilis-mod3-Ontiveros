import './Locations.css'
import Location from './Location';
//import { useState } from "react";

 const Locations = ({locations}) => {
  return (
    <div className='grid'>
      {locations.map((location) => (
        <Location location={location} />
      ))}
    </div>
  )
}

export default Locations
 
/* const Palettes = ({ palettes }) => {
  return (
    <div className='grid'>
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </div>
  );
} */