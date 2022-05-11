/* product model */
import ProductModel from '../schemas/product-schema.js'

export const findProducts = async (req, res) => {
  try {
    const findProduct = await ProductModel.find()
    res.status(200).json(findProduct)
  } catch (error) {
    res.status(500).json({ error })
  }
}
