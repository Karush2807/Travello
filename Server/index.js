import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import './config/dotenv.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',  // Allow only this origin
    credentials: true,                // Allow cookies or credentials
  }));
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully ! '))
    .catch((err) => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));