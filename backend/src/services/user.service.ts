import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// export const createUser = async (data: {
//     Nombre: string;
//     Apellido_Paterno: string;
//     Apellido_Materno: string;
//     Username: string;
//     Correo: string;
//     Password: string;
//     // Activo: boolean;
// }) => {
//     return prisma.usuario.create({
//         // data,
//         // Activo: true,
//         data: {
//             ...data,
//             Activo: true, // aquí dentro, y en minúsculas si en tu schema está así
//         },
//     });
// };

export const createUser = async ({
    Nombre,
    Apellido_Paterno,
    Apellido_Materno,
    Username,
    Correo,
    Password
}: {
    Nombre: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Username: string;
    Correo: string;
    Password: string;
}) => {
    // console.log("DATA RECIBIDA EN SERVICE:", Nombre, ",", Apellido_Paterno, ",", Apellido_Materno, ",", Username, ",", Correo, ",", Password);
    const hashedPassword = await bcrypt.hash(Password, 10);

    return prisma.usuario.create({
        // data: {
        //     Nombre,
        //     Apellido_Paterno,
        //     Apellido_Materno,
        //     Username,
        //     Correo,
        //     Password,
        //     Activo: true
        // },
        data: {
            Nombre: Nombre,
            Apellido_Paterno: Apellido_Paterno,
            Apellido_Materno: Apellido_Materno,
            Username: Username,
            Correo: Correo,
            Password: hashedPassword,
            Activo: true
        }
    });
};
