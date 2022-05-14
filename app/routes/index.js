import { Router } from 'express';

const router = Router();
/* Router Products */

/* controllers */
import {
  findProducts,
  addProduct,
  findSingleProduct
} from '../controllers/product-controller.js';

import OrderController from '../controllers/order-product.js';
import authCheckout from '../middlewares/auth.js';

/* get /products */
router.get('/products', findProducts);

/* post /products */
router.post('/products', addProduct);

/*get /product/:slug*/
router.get('/product/:slugParam', findSingleProduct);

/* create order */
router.post('/order', authCheckout, OrderController);

export default router;
