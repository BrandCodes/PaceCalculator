// src/controllers/health.controller.ts
import { Request, Response } from 'express';

export const getHealthStatus = (_req: Request, res: Response) => {
    res.status(200).json({
        message: '✅ Backend funcionando correctamente',
        timestamp: new Date().toISOString(),
    });
};
