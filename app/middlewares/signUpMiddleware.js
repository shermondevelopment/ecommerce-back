import signUpValidation from '../validations/signUpValidation.js'
import userModel from '../schemas/user-schema.js'

export default async function validSignUp(req, res, next) {
  const { email } = req.body
  const validation = signUpValidation.validate(req.body, { abortEarly: false })
  if (validation.error)
    return res
      .status(422)
      .send(validation.error.details.map((detail) => detail.message))

  try {
    const user = await userModel.findOne({ email })
    if (user) return res.status(409).send('Usuário ja cadastrado')
    next()
  } catch (error) {
    console.log(error.message)
    res.status(500)
  }
}
