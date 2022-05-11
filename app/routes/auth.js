import { Router } from 'express';
import { signUp } from '../controllers/auth-controller.js';
import validSignUp from '../middlewares/signUpMiddleware.js';

const authRouter = Router();

authRouter.post('/signup', validSignUp, signUp);
authRouter.post('/signin');

export default authRouter;
