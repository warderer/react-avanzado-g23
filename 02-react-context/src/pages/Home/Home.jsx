// import SongList from '../../components/SongList/SongList'
import SongList from '@/components/SongList'
import SongDetail from '@/components/SongDetail'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongList />
      </div>
      <div className='derecho'>
        <h2>Lado Derecho</h2>
        <SongDetail />
      </div>
    </div>
  )
}
export default Home
