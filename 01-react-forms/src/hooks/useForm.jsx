// Reglas para crear un Hook de React
// 1. Un Custom Hook es una FUNCIÓN que utiliza otros hooks de react.
// 2. Siempre debemos usar la palabra 'use' al nombrar el archivo.
// 3. Siempre debe usar al menos un hook de React (useState, useEffect, useRef, etc. etc. etc.)
// 4. Deben ser REUTILIZABLES, no para casos muy especificos.
import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado ÚNICO para guardar los datos del formulario en un objeto.
  const [input, setInput] = useState(defaults)

  // Función que se ejecuta cuando ocurre un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
