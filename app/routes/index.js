import { Router } from 'express'

const router = Router()
/* Router Products */

/* controllers */
import { findProducts, addProduct } from '../controllers/product-controller.js'

/* get /products */
router.get('/products', findProducts)

/* post /products */
router.post('/products', addProduct)

export default router
