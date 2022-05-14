import Joi from 'joi';

const orderValidation = Joi.object({
  product: Joi.array()
    .required()
    .error(() => 'produto é obrigatório!'),
  payment: Joi.string()
    .required()
    .error(() => 'pagamento e obrigatório'),
  total_payment: Joi.number()
    .required()
    .error(() => 'total é obrigatório')
});

export default orderValidation;
