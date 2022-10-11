import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//import { useNavigate } from 'react-router-dom';
import { getLocation } from "../../service";
import { TempContext } from "../../context/TempContext";
import { PlaceContext } from "../../context/PlaceContext";
import { CardLocationContext } from "../../context/CardLocationContext";
import "./CardCreation.css";
import Locations from "../../Components/Locations/Locations";

const CardCreation = () => {
  
  const { Temp, setTemp } = useContext(TempContext);
  const { Place, setPlace } = useContext(PlaceContext);
  const {CardLocation, setCardLocation} = useContext(CardLocationContext);
  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  //Recibo los datos del form
  const onSubmit = (data) => {
    //Se pasan paramtros a la funcion de localizacion
  
    getLocation(data.latitude, data.longitude)
      .then((data) => setPlace(data))      
      .catch((err) => console.log(err));
    getLocation(data.latitude, data.longitude)
      .then((data) => setTemp(data.current_weather)) 
      .catch((err) => console.log(err));  
      
      const { temperature,windspeed } = Temp
      const {timezone} = Place
      //Despues de eliminar una tarjeta le asigno nuevos valores a los id de CardLocation
      setCardLocation(CardLocation.map((card,indice)=>{
          card.id = indice+1
      }))
      //Creo nuevo objeto
      const cardNew = {
          id: CardLocation.length+1,
          zona: timezone,   
          latitud: data.latitude,
          longitud:  data.longitude,
          temperatura:temperature,
          velocidad_viento:windspeed,
        }
        {console.log("muestro CardNewantes", cardNew)} 
        
        setCardLocation([...CardLocation, cardNew])
  };
    
  return (
    <div className="card-new-container">
        
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
      <span>Nueva Tarjeta</span> 
      <br />
        <input
          className="input-card-name-form"
          type="text"
          placeholder="Nombre del Lugar"
          {...register("tarjetaName", {
            required: "Debe ingresar un nombre",
          })}
        />
        <p>{errors.tarjetaName?.message}</p>
        <input
          className="input-card-name-form"
          type="Number"
          step="any"
          placeholder="Latitud"
          {...register("latitude", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitude?.message}</p>
        <input
          className="input-card-name-form"
          type="Number"
          step="any"
          placeholder="Longitud"
          {...register("longitude", {
            required: "Debe ingresar longitud",
          })}
        />
        <br />
        <button className="btn-form" type="submit">
          Crear tarjeta
         
        </button>
      </form>
      {console.log("muestro CardLocation", CardLocation)}
      <Locations locations={CardLocation} />
    </div>
    
  );
};

export default CardCreation;
