import Joi from 'joi'

const signUpValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.ref('password')
})

export default signUpValidation
