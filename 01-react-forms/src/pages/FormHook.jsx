import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const FormHook = () => {
  // Paso 1: crear un objeto con valores iniciales:
  const datos = {
    nombre: '',
    apellido: '',
    otro: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  }

  // Paso 2: Creo la función que se ejecutara al enviar el formulario
  const sendData = (data) => {
    console.log('Send Data', data)
  }

  // Paso 3: Hacer uso de mi custom hook
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value={input.nombre} onChange={handleInputChange} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu Apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />

          <label htmlFor='otro'>Otro</label>
          <input type='text' name='otro' placeholder='Tu Otro' id='otro' value={input.otro} onChange={handleInputChange} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value={input.edad} onChange={handleInputChange} />

          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' value={input.email} onChange={handleInputChange} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={input.password} onChange={handleInputChange} />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}
export default FormHook
