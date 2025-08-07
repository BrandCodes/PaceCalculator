// src/db/database.ts

// Aquí puedes crear funciones para acceder a la base de datos
// y más adelante podrías intercambiar Prisma por otro ORM o driver

import { prisma } from './prisma';

// Ejemplo de función abstracta
export const getAllCalculations = async () => {
    return await prisma.prediccion.findMany();
};

// Más funciones según tus entidades...
