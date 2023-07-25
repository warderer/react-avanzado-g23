import { useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getSingleUserService } from '@/services/userServices'

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getSingleUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error('Ocurrio un error en Dashboard', error.message)
      }
    }
    fetchUserData()
  }, [userPayload.id])

  return (
    <>
      <h1>Dashboard</h1>
      {
      userData?.first_name && <h2> {userData.first_name}</h2>
      }
      {
      userData?.last_name && <h2> {userData.last_name}</h2>
      }
      {
      userData?.gender && <h2> {userData.gender}</h2>
      }
      {
      userData?.email && <h2> {userData.email}</h2>
      }
    </>
  )
}
export default Dashboard
