import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el Proveedor del contexto (provider)
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // JWT Payload decodificado

  const login = (token) => {
    localStorage.setItem('token', token) // Guardamos el token en el localStorage
    const decodedPayload = jwtDecode(token)
    setUserPayload(decodedPayload)
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('token') // Borro el token del localStorage
    setUserPayload(null) // Borro el payload del estado
    setIsAuth(false) // Estoy deslogeado
  }

  // Si el token existe en el localStorage, lo recupero y establezco los estados correspondientes en mi aplicación
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedPayload = jwtDecode(token)
      setUserPayload(decodedPayload)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
