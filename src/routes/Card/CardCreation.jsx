import { useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getLocation, getUrl } from "../../service";
import { CardLocationContext } from "../../context/CardLocationContext";
import "./CardCreation.css";
import { ContadorContext } from "../../context/ContadorContext";

  const CardCreation = () => {
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);
  const navigate = useNavigate();
  const {  register,handleSubmit,formState: { errors },} = useForm({});
  let imagenes=[] 
  const { contador, setContador } = useContext(ContadorContext) 
  //Recibo los datos del form
  const onSubmit = (data) => {   
    setContador(contador+1)
    let conta=contador.toString()
    getLocation(data.latitude, data.longitude)
      .then((dato) => {
     //Obtengo la Urls de la API  
      getUrl()   
         .then((url) => {
          imagenes = url.filter((dir)=>(dir.id===conta)).map((dir)=>(dir.url))
           console.log("muestro imagenes",imagenes);
            //Se crea la nueva tarjeta 
           const cardNew = {
            id: CardLocation.length + 1,
            zona: data.lugar,
            latitud: data.latitude,
            longitud: data.longitude,
            temperatura: dato.current_weather.temperature,
            velocidad_viento: dato.current_weather.windspeed,
            url: imagenes[0],
           };
            setCardLocation([...CardLocation, cardNew],
            //se reinician los id   
            CardLocation.map((card, indice) => (card.id = indice + 1)));
          })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div className="card-new-container">
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
         <span>Nueva Tarjeta</span> 
        <input className="input-card-name-form" type="text" placeholder="Ubicacion"  
        {...register("lugar", { required: "Debe ingresar nombre de la ubicacion",})}/>
        <p>{errors.tarjetaName?.message}</p>
        
        <input className="input-card-name-form" type="Number" step="any" placeholder="Latitud"
        {...register("latitude", { required: "Debe ingresar latitud",})}/>
        <p>{errors.latitude?.message}</p>
        
        <input className="input-card-name-form" type="Number" step="any" placeholder="Longitud"
        {...register("longitude", { required: "Debe ingresar longitud",})}/>
        
        <button className="btn-form" type="submit">
          Crear tarjeta
        </button>
      </form>
    </div>
  );
};

export default CardCreation;
