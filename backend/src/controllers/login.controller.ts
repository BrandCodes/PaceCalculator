// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { loginUser } from "../services/login.service";

export const login = async (req: Request, res: Response) => {
    try {
        const { Username, Password } = req.body;

        if (!Username || !Password) {
            return res.status(400).json({ message: "Username y Password son requeridos" });
        }

        const token = await loginUser(Username, Password);
        if (!token) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        return res.json({ message: "Login exitoso", token });
    } catch (error) {
        console.error("Error en login:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};