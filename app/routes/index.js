import { Router } from 'express'

const router = Router()
/* Router Products */

/* controllers */
import { findProducts } from '../controllers/product-controller.js'

/* get /products */
router.get('/products', findProducts)

export default router
