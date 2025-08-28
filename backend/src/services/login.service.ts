// src/services/auth.service.ts
import prisma from "../prisma"; // tu instancia de Prisma
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (username: string, password: string): Promise<string | null> => {
    const user = await prisma.usuario.findUnique({
        where: { username },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.Password);
    if (!passwordMatch) return null;

    // Crear JWT
    const token = jwt.sign(
        { id: user.id, username: user.Username },
        process.env.JWT_SECRET || "secretKey",
        { expiresIn: "1h" }
    );

    return token;
};