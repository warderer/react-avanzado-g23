// CONTEXT se encagar de manejar los estados globales de React
// Nos permite compartir la misma información entre componentes que encuentran en distintas jerarquías del árbol de react

import { useState, useEffect, createContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// Paso 1. Crear el contexto
const SongContext = createContext()

// Paso 2. Crear el proveedor del contexto

function SongProvider (props) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({}) // Identifica la canción seleccionada de la lista
  const [search, setSearch] = useState('') // Identifica la palabra que pongo en el buscador

  // Simular una llamada a la API despues de "x" tiempo
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    setSearch
  }

  return (
    <SongContext.Provider value={data} >
      {props.children}
    </SongContext.Provider>
  )
}

export {SongProvider, SongContext}
