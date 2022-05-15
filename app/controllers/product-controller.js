/* slug */
import slug from 'slug';

/* product model */
import ProductModel from '../schemas/product-schema.js';

/* validation helper */
import validation from '../utils/validation.js';

/* SchmeaValidation */
import addProductValidation from '../validation/product-validation.js';

export const findProducts = async (req, res) => {
  try {
    const pageOptions = {
      page:
        parseInt(req.query.page, 10) === 1
          ? 0
          : parseInt(req.query.page, 10) - 1,
      limit: parseInt(req.query.limit, 10) || 10
    };
    const count = await ProductModel.find().count();
    const findProduct = await ProductModel.find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.status(200).json({ products: findProduct, pages: count });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addProduct = async (req, res) => {
  try {
    const isValid = await validation(req.body, addProductValidation);

    if (isValid) {
      return res.status(422).json({ error: isValid });
    }

    await ProductModel.create({
      ...req.body,
      slug: slug(req.body.title)
    });

    res.sendStatus(201);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findSingleProduct = async (req, res) => {
  const slugParam = req.params.slugParam;
  try {
    const product = await ProductModel.findOne({ slug: slugParam });
    if (product) {
      return res.send(product);
    }
    res.status(404).send('Esse produto não existe no nosso catálogo');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};
