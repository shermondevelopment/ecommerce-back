/* slug */
import slug from 'slug'

/* product model */
import ProductModel from '../schemas/product-schema.js'

/* validation helper */
import validation from '../utils/validation.js'

/* SchmeaValidation */
import addProductValidation from '../validation/product-validation.js'

export const findProducts = async (req, res) => {
  try {
    const findProduct = await ProductModel.find()
    res.status(200).json(findProduct)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const addProduct = async (req, res) => {
  try {
    const isValid = await validation(req.body, addProductValidation)

    if (isValid) {
      return res.status(422).json({ error: isValid })
    }

    await ProductModel.create({
      ...req.body,
      slug: slug(req.body.title)
    })

    res.sendStatus(201)
  } catch (error) {
    res.status(500).json(error)
  }
}
