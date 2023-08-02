import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import logo from '../assets/react.svg'
import { schemaReactHookForm } from '../validations/reactHookForm'

const ReactHookForm = () => {
  // Paso 1: Creo la función que se ejecutara al enviar el formulario
  const sendData = (data) => {
    // console.log('Send Data', data)
    // https://dummyjson.com/docs/users
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(console.log)
      .then(reset())
  }

  // Paso 2: Hacer uso de mi custom hook
  const {
    register,
    handleSubmit,
    reset,
    // clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaReactHookForm)
  })

  // Paso 3: Crear el formulario y usar react-hook-form
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(sendData)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', { required: true })}
            aria-invalid={errors.firstName ? 'true' : 'false'}
          />
          {/* errors will return when field validation fails  */}
          <p>{errors.firstName?.message}</p>

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.lastName?.message}</p>

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age')}
          />
          <p>{errors.age?.message}</p>

          <label htmlFor='genre'>Genero</label>
          <select name='genre' id='genre' {...register('genre')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <p>{errors.genre?.message}</p>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}
export default ReactHookForm
