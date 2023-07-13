import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const {list, loading, setSelectedSong} = useSongContext()
  return (
    <section>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div
            key={song.id}
            className='row-song'
            onClick={() => setSelectedSong(song)}
          >
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </section>
  )
}
export default SongList
