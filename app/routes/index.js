import { Router } from 'express'

const router = Router()
/* Router Products */

/* controllers */
import { findProducts } from '../controllers/product-controller.js'

router.get('/products', findProducts)

export default router
