import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const LoginRef = () => {
  const { setCurrentUser } = useContext(UserContext)
  // se crean los elemntos de useref
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username.current)
    //a estos componentes podemos acceder y modificar
    //id, className, value, placeholder
    const user = {
      //cuando hacemos iniciar sesion accedemos a la referencia
      //username.current.value y value es el valor del input
      username: username.current.value,
      password: password.current.value
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    setCurrentUser(user)
    /* username.current.value =''
    username.current.placeholder ='Nuevo nombre de usuario'
    username.current.className ='Nueva Clase' */
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
       //esta etiqueta es propia de react, aca creamos la referencia
       //con el elemento del input, le pasamos username, entonces de esta
       //username ya tiene acceso al input
        ref={username}
      />
      <input
        className='input-form'
        type='password'
        placeholder='Contraseña'
        ref={password}
      />
       <button className='btn-form' type='submit'>Iniciar Sesión</button>
    </form>
  </div>
  )
}
export default LoginRef