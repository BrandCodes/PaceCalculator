# Pace Calculator 🏃‍♂️💨

Una calculadora web de ritmos para atletas, construida con React + TypeScript + Tailwind CSS.  
Permite ingresar distancia y tiempo para calcular el ritmo por km o milla.  

## 🔧 Tecnologías usadas

- React 19 + Vite + TypeScript
- Tailwind CSS v3
- Radix UI (tooltips)
- Lucide React (íconos)
- react-hot-toast (notificaciones)

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev


# Backend

## 🚀 Requisitos

- Node.js (versión recomendada 18+)
- PostgreSQL
- Yarn o npm

## 📦 Instalación

```bash
cd backend
npm install


## Configuración del entorno  

- Crea un archivo .env en la raíz de /backend con el siguiente contenido:
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/tu_basededatos"


## Comandos Útiles 

- Ejecutar servidor en desarrollo
npm run start

- Generar el cliente Prisma (si actualizas el esquema)
npx prisma generate

- Si tu base de datos ya existe y no usaste Prisma para crearla
npx prisma db pull
