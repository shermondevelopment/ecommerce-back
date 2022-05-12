import { Router } from 'express'
import { signUp, signIn } from '../controllers/auth-controller.js'
import validSignUp from '../middlewares/signUpMiddleware.js'

const authRouter = Router()

authRouter.post('/signup', validSignUp, signUp)
authRouter.post('/signin', signIn)

export default authRouter
