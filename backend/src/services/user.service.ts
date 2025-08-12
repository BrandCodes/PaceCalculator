import { PrismaClient } from '@prisma/client';
import type crypto = require('crypto');

const prisma = new PrismaClient();

export const createUser = async (data: {
    Nombre: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Username: string;
    Correo: string;
    Password: string;
    Activo: boolean;
}) => {
    return prisma.usuario.create({
        data,
    });
};
