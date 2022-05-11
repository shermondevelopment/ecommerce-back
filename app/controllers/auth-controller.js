import bcrypt from 'bcrypt';
import Joi from 'joi';
import { stripHtml } from 'string-strip-html';
import jwt from 'jsonwebtoken';

import userModel from '../schemas/user-schema.js';

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
