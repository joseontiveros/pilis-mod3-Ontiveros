import { useContext } from "react";
import { CardLocationContext } from "../../context/CardLocationContext";
import Locations from "../../Components/Locations/Locations"

const Home = () => {

const { CardLocation } = useContext(CardLocationContext);

return (
      <>
        <div className='main-container'>         
          <Locations locations={CardLocation}/>
        </div>
      </>
    );
  };
  
  export default Home;