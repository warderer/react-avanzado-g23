import * as yup from 'yup'

export const schemaReactHookForm = yup
  .object({
    firstName: yup.string().required('Escribe tu nombre'),
    lastName: yup.string().required('Escribe tu apellido'),
    age: yup.number().positive('La edad debe ser un número positivo').integer('Indica tu edad'),
    email: yup.string().email('Correo invalido').required('Por favor indica un correo'),
    password: yup.string().required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial'),
    genre: yup
      .mixed()
      .oneOf(['M', 'F', 'O'], 'Selecciona un genero: Hombre, Mujer u Otro')
      .defined()
  })
  .required()
