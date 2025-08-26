import { Request, Response, NextFunction } from "express";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { Nombre, Apellido_Paterno, Apellido_Materno, Username, Password, Correo } = req.body;

    // Requeridos
    if (!Nombre || !Apellido_Paterno || !Apellido_Materno || !Username || !Password || !Correo) {
        return res.status(400).json({
            error: "Faltan campos obligatorios.",
        });
    }

    // Ejemplo de validación extra
    if (Password.length < 6) {
        return res.status(400).json({ error: "El password debe tener al menos 6 caracteres" });
    }

    // Regex simple para correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Correo)) {
        return res.status(400).json({ error: "Correo no válido" });
    }

    next(); // pasa al controller
};
