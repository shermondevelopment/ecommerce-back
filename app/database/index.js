import mongoose from 'mongoose'
import 'dotenv/config'

export default mongoose.connect(process.env.PORT)
