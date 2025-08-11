import { PrismaClient } from '@prisma/client';
import type crypto = require('crypto');

const prisma = new PrismaClient();

export const createUser = async (data: {
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    username: string;
    correo: string;
    password: string;
    activo: boolean;
}) => {
    return prisma.usuario.create({
        data,
    });
};
