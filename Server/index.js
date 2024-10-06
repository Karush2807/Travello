import express from 'express'
import './config/dotenv.js'


const app = express();
app.use(express.json());

// For resolving cors error when we connect this to the frontend 
// app.use(cors({
//     origin: ["http://localhost:5173"],
// }));
