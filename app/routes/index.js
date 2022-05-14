import { Router } from 'express';

const router = Router();
/* Router Products */

/* controllers */
import {
  findProducts,
  addProduct,
  findSingleProduct
} from '../controllers/product-controller.js';

/* get /products */
router.get('/products', findProducts);

/* post /products */
router.post('/products', addProduct);

/*get /product/:slug*/
router.get('/product/:slugParam', findSingleProduct);

export default router;
