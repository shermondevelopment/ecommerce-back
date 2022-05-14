import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  client_id: { type: String, required: true },
  product: [Object],
  payment: { type: String, required: true },
  bill_date: { type: Date, default: Date.now },
  total_payment: { type: Number, required: true }
});

export default mongoose.model('orders', orderSchema);
