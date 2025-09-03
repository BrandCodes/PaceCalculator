// src/services/auth.service.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
export const loginUser = async (Username: string, Password: string): Promise<string | null> => {
    const user = await prisma.usuario.findFirst({
        where: { Username },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    console.log("El pass es: " + Password + " y en BD es: " + user.Password + " y la respuesta de match: " + passwordMatch)
    if (!passwordMatch) return null;

    // Crear JWT
    const token = jwt.sign(
        { id: user.IdUsuario, username: user.Username },
        process.env.JWT_SECRET || "secretKey",
        { expiresIn: "1h" }
    );
    console.log("token: " + token)
    return token;
};