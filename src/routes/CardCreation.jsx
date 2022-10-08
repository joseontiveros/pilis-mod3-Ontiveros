import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//import { useNavigate } from 'react-router-dom';
import { getLocation } from "../service";
import { TempContext } from "../context/TempContext";
import { PlaceContext } from "../context/PlaceContext";
import "./CardCreation.css";

const CardCreation = () => {
  const { Temp, setTemp } = useContext(TempContext);
  const { Place, setPlace } = useContext(PlaceContext);
  const CardNew = {
    Loco:1,
   }
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
    //navigate('/')
  
  };
  return (
    <div className="card-new-container">
      {/*   <span>Crear Tarjeta</span> */}
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
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
          type="Number"
          step="any"
          placeholder="Latitud"
          {...register("latitude", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitude?.message}</p>
        <input
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
    </div>
  );
};

export default CardCreation;
