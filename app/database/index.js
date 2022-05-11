import mongoose from 'mongoose';
import 'dotenv/config';

export default mongoose.connect('mongodb://127.0.0.1:27017');
