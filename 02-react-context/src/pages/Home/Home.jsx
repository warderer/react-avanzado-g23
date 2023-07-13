// import SongList from '../../components/SongList/SongList'
import SongList from '@/components/SongList'
import SongDetail from '@/components/SongDetail'
import './home.css'
import { SongProvider } from '@/context/SongContext'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Lado Izquierdo</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>Lado Derecho</h2>
          <SongDetail />
        </div>
      </SongProvider>
    </div>
  )
}
export default Home
