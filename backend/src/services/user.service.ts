import { PrismaClient } from '@prisma/client';
import type crypto = require('crypto');

const prisma = new PrismaClient();

export const createUser = async (data: {
    // idUsuario: crypto.UUID;
    nombre: string;
    apellidoP: string;
    apellidoM?: string;
    username: string;
    password: string;
    correo: string;
    activo: boolean;
}) => {
    return prisma.usuario.create({
        data,
    });
};
