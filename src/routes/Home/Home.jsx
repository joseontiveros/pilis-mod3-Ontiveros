import { useContext,useState } from "react";
import { CardLocationContext } from "../../context/CardLocationContext";
import Locations from "../../Components/Locations/Locations"
import "../Home/Home.css";
const Home = () => {

const { CardLocation } = useContext(CardLocationContext);

//------------------------------------------------------

  const [ search, setSearch ] = useState("")

   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }

   //metodo de filtrado 
   const results = !search ? CardLocation : CardLocation.filter((dato)=> 
   dato.zona.toLowerCase().includes(search.toLocaleLowerCase()))
 
//--------------------------------------------------

return (
      <>
        <input className='search' value={search} onChange={searcher} type="text" placeholder='BUSCAR UBICACION' />
        <div className='main-container'>         
       
          <Locations locations={results}/>
        </div>
      </>
    );
  };
  
  export default Home;