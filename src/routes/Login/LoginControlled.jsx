import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const LoginControlled = () => {
  const { setCurrentUser } = useContext(UserContext)
  //se define estado para username, una cadena de texto vacia 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    //esto es para prevenir el comportamiento por defecto que tiene el formulario
    e.preventDefault()
    const user = {
      //cuando el nombre de la variable coincide con el nombre de key se puede juntar
      //en uno solo en lugar de username : username, key : value
      username,
      password
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    setCurrentUser(user)
    navigate('/')
  }

  return (
    <div className='sign-in-container'>
    <span>Ingresa con tu usuario y contraseña</span>
    <form className='sign-in-form' onSubmit={handleSubmit}>
      <input
        className='input-form'
        type="text"
        placeholder='Nombre de usuario'
        //el valor de username iniccialmente va estar vacio
        value={username}
        //cada tecla que presionamos vamos actualizando el estado
        //por eso utilizamos un onchance, cada ves que presionamos una tecla 
        //vamos a generar un evento (e : evento capturado) 
        //el target apunta a la etiqueta input, targe.value va a sacar el valor que introducimos
        //por teclado y con esto seteamos el username.
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='input-form'
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <button className='btn-form' type='submit'>Iniciar Sesión</button>
    </form>
  </div>
  )
}
export default LoginControlled