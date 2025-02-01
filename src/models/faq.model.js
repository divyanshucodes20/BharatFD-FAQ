import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: true 
   },
  answer: { 
    type: String, 
    required: true 
   },
  translations: {
    hi: String,
    bn: String,
    en: String,
  },
});

export default mongoose.model('FAQ', FaqSchema);
