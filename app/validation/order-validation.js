import Joi from 'joi';

const orderValidation = Joi.object({
  client_id: Joi.string().required('cliente é obrigatório!'),
  product: Joi.array().required('produto é obrigatório!'),
  payment: Joi.string().required('pagamento e obrigatório'),
  total_payment: Joi.number().required('total é obrigatório')
});

export default orderValidation;
