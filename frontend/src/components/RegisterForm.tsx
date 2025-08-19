import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import toast from 'react-hot-toast';

interface FormData {
    Nombre: string;
    Apellido_Paterno: string;
    Apellido_Materno: string;
    Username: string;
    Password: string;
    Correo: string;
}

export default function RegisterForm() {
    const [form, setForm] = useState<FormData>({
        Nombre: '',
        Apellido_Paterno: '',
        Apellido_Materno: '',
        Username: '',
        Password: '',
        Correo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Log en frontend antes de enviar
        // console.log("📤 Datos enviados al backend:", form);

        // Validación simple en frontend
        if (!form.Nombre || !form.Apellido_Paterno || !form.Apellido_Materno || !form.Username || !form.Password || !form.Correo) {
            toast.error("Por favor, llena todos los campos obligatorios.");
            return;
        }

        try {
            const res = await fetch('http://localhost:3001/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Usuario registrado correctamente.");
                setForm({
                    Nombre: '',
                    Apellido_Paterno: '',
                    Apellido_Materno: '',
                    Username: '',
                    Password: '',
                    Correo: '',
                });
            } else {
                toast.error(data.error || "Error al registrar usuario.");
            }
        } catch (error) {
            console.error(error);
            toast.error("No se pudo conectar con el servidor.");
        }
    };

    const InputWithTooltip = ({
        label,
        name,
        type,
        tooltipText,
    }: {
        label: string;
        name: keyof FormData;
        type?: string;
        tooltipText: string;
    }) => (
        <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                {label}
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <span className="cursor-pointer text-blue-500">ℹ️</span>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content
                                className="bg-gray-800 text-white px-3 py-1 rounded-md shadow-lg"
                                side="right"
                                sideOffset={5}
                            >
                                {tooltipText}
                                <Tooltip.Arrow className="fill-gray-800" />
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </label>
            <input
                type={type || 'text'}
                name={name}
                value={form[name] ?? ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
            />
        </div>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Registro de Usuario</h2>

            <InputWithTooltip label="Nombre" name="Nombre" tooltipText="Escribe tu nombre completo" />
            <InputWithTooltip label="Apellido Paterno" name="Apellido_Paterno" tooltipText="Tu primer apellido" />
            <InputWithTooltip label="Apellido Materno" name="Apellido_Materno" tooltipText="Tu segundo apellido (opcional)" />
            <InputWithTooltip label="Username" name="Username" tooltipText="Nombre de usuario para iniciar sesión" />
            <InputWithTooltip label="Password" name="Password" type="password" tooltipText="Debe tener al menos 6 caracteres" />
            <InputWithTooltip label="Correo" name="Correo" tooltipText="Tu email personal" />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
                Guardar
            </button>
        </form>
    );
}
