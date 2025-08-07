// src/app.ts
import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/health', healthRoutes);

export default app;
