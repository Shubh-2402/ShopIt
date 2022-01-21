import express from 'express';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getSingleProduct);
router.post('/admin/product/new', addProduct);
router.put('/admin/product/:id', updateProduct);
router.delete('/admin/product/:id', deleteProduct);

export default router;