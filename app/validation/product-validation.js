import Joi from 'joi'

const addProductValidation = Joi.object({
  title: Joi.string()
    .trim()
    .required()
    .error(() => new Error('por favor insira um título!')),
  slug: Joi.string().trim(),
  figure: Joi.string(),
  price: Joi.number(),
  should: Joi.string(),
  category_id: Joi.string(),
  sizes: Joi.array(),
  colors: Joi.array(),
  gallery: Joi.array()
})

export default addProductValidation
