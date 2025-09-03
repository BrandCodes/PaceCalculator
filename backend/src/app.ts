// src/app.ts
import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes';
import userRoutes from './routes/user.routes';
import loginRoutes from "./routes/login.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/health', healthRoutes);
// ruta ejemplo.

app.use('/api/users', userRoutes);
// POST http://localhost:3000/api/users/register
app.use("/api/login", loginRoutes);

export default app;
