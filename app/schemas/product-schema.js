import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, min: 10 },
  slug: { type: String, required: true },
  figure: { type: String, required: true },
  price: { type: Number, required: true },
  should: { type: String, required: true },
  category_id: { type: String },
  sizes: [String],
  colors: [String],
  gallery: [String]
});

const ProductModel = mongoose.model('products', ProductSchema);

export default ProductModel;
