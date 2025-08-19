import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
    try {
        // console.log("BODY COMPLETO:", req.body); // 👈 log directo
        // console.log("Keys del body:", Object.keys(req.body));
        const { Nombre, Apellido_Paterno, Apellido_Materno, Username, Correo, Password } = req.body;

        // if (!Nombre || !Apellido_Paterno || !Apellido_Materno || !Username || !Password || !Correo || !Activo) {
        //     return res.status(400).json({ error: 'Faltan campos obligatorios' });
        // }

        // console.log("📌 Datos recibidos del frontend:", {
        //     Nombre,
        //     Apellido_Paterno,
        //     Apellido_Materno,
        //     Username,
        //     Correo,
        //     Password
        // });

        // const newUser = await userService.createUser({
        //     Nombre,
        //     Apellido_Paterno,
        //     Apellido_Materno,
        //     Username,
        //     Correo,
        //     Password,

        // });
        const newUser = await userService.createUser({
            Nombre: Nombre,
            Apellido_Paterno: Apellido_Paterno,
            Apellido_Materno: Apellido_Materno,
            Username: Username,
            Correo: Correo,
            Password: Password
        });

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
