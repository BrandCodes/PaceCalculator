// import express from 'express';
// import cors from 'cors';
// import { PrismaClient } from './generated/prisma';

// const app = express();
// const prisma = new PrismaClient();

// app.use(cors());
// app.use(express.json());

// app.get('/calculations', async (req, res) => {
//     const data = await prisma.prediccion.findMany();
//     res.json(data);
// });

// // app.post('/calculations', async (req, res) => {
// //     const { distance, unit, time } = req.body;
// //     const calc = await prisma.prediccion.create({
// //         data: { distance, unit, time },
// //     });
// //     res.status(201).json(calc);
// // });

// app.listen(3001, () => {
//     console.log('Server running on http://localhost:3001');
// });

// src/index.ts
import app from './app';
import userRoutes from './routes/user.routes';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

app.use('/api/users', userRoutes);
// POST http://localhost:3000/api/users/register