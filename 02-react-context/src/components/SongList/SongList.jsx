import { useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
import './songlist.css'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  // Simular una llamada a la API despues de "x" tiempo
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div key={song.id} className='row-song'>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}
export default SongList
