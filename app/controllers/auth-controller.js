//Dependencies
import bcrypt from 'bcrypt';
import { stripHtml } from 'string-strip-html';
import jwt from 'jsonwebtoken';
//Project Modules
import userModel from '../schemas/user-schema.js';
import signInValidation from '../validations/signInValidation.js';

export async function signUp(req, res) {
  const { name, email, password, passwordConfirmation } = req.body;
  try {
    await userModel.create({
      email,
      name: stripHtml(name).result.trim(),
      password: bcrypt.hashSync(password, 10)
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const validation = signInValidation.validate(req.body, { abortEarly: false });
  if (validation.error) {
    return res
      .status(422)
      .send(validation.error.details.map((detail) => detail.message));
  }
  try {
    const user = await userModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(200).send('Logado com sucesso');
    }
    res.status(401).send('Credenciais não foram aceitas.');
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
