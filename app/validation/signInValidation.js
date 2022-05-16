import Joi from 'joi';

const signInValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export default signInValidation;
