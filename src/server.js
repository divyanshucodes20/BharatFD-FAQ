import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import faqRoutes from './src/routes//faqRoutes.js';
import errorHandler from './src/utils/errorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/v1/faqs', faqRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
