import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { nombre, apellidoP, apellidoM, username, password, correo, activo } = req.body;

        if (!nombre || !apellidoP || !username || !password || !correo || !activo) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        const newUser = await userService.createUser({
            nombre,
            apellidoP,
            apellidoM,
            username,
            password,
            correo,
            activo,
        });

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
