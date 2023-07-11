import {useState} from 'react'
import canciones from '@/assets/listaCanciones.json'
import 'songlist.css'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  return (
    <div>SongList</div>
  )
}
export default SongList
