import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { Nombre, Apellido_Paterno, Apellido_Materno, Username, Correo, Password, Activo } = req.body;

        if (!Nombre || !Apellido_Paterno || !Apellido_Materno || !Username || !Password || !Correo || !Activo) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        const newUser = await userService.createUser({
            Nombre,
            Apellido_Paterno,
            Apellido_Materno,
            Username,
            Correo,
            Password,
            Activo,
        });

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
