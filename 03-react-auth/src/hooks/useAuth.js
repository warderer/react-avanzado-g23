import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// Paso 3. Crear un hook para usar el contexto

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('AuthContext debe ser usado dentro de AuthProvider')// Verificar que el contexto no sea llamado fuera del proveedor
  }

  return context
}
