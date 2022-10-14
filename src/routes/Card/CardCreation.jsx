import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getLocation } from "../../service";
import { CardLocationContext } from "../../context/CardLocationContext";
import "./CardCreation.css";

  const CardCreation = () => {
  const { CardLocation, setCardLocation } = useContext(CardLocationContext);
  const navigate = useNavigate();
  const {  register,handleSubmit,formState: { errors },} = useForm({});

  
  //Recibo los datos del form
  const onSubmit = (data) => {
    //Se reinician los id luego de quitar una tarjeta
    setCardLocation(CardLocation.map((card, indice) => (card.id = indice + 1)));
    //Se pasan paramtros a la funcion de localizacion
    getLocation(data.latitude, data.longitude)
      .then((dato) => {
        //Se crea la nueva tarjeta 
        const cardNew = {
          id: CardLocation.length + 1,
          zona: data.lugar,
          latitud: data.latitude,
          longitud: data.longitude,
          temperatura: dato.current_weather.temperature,
          velocidad_viento: dato.current_weather.windspeed,
        };
        setCardLocation([...CardLocation, cardNew]);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div className="card-new-container">
      <span>Nueva Tarjeta</span>
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
        
  
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
