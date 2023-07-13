import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const {list, loading, setSelectedSong, search} = useSongContext()
  return (
    <section>
      {loading
        ? <h1>Cargando...</h1>
        : list.filter((song) => {
          if (search === '') {
            return song
          } else if (song.title.toLowerCase().includes(search.toLowerCase())) {
            return song
          }
          return null
        }
        ).map((song) => (
          <div
            className='row-song'
            key={song.id}
            onClick={() => setSelectedSong(song)}
          >
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        )

        )
      }
    </section>
  )
}
export default SongList
