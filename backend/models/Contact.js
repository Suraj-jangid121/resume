import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true },
  phone: String,
  topic: String,
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
