import { useAuthContext } from '@/hooks/useAuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola CUSTOMER</h2>}

      {
        userPayload?.role === 'CUSTOMER' && <h4>Bienvenido CUSTOMER</h4>
      }

      {
        userPayload?.role === 'ADMIN' && <h4>Bienvenido ADMIN</h4>
      }
    </>
  )
}
export default Secret
