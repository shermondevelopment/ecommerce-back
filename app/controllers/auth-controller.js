//Dependencies
import bcrypt from 'bcrypt';
import { stripHtml } from 'string-strip-html';
import jwt from 'jsonwebtoken';
//Project Modules
import userModel from '../schemas/user-schema.js';
import signInValidation from '../validations/signInValidation.js';

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    await userModel.create({
      email,
      name: stripHtml(name).result.trim(),
      password: bcrypt.hashSync(password, 10)
    });
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
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
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY
    );
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(200).json({ token });
    }
    res.status(401).send('Credenciais não foram aceitas.');
  } catch (error) {
    res.sendStatus(500);
  }
}
