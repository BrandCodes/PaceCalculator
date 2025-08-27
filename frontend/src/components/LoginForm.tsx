import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login con:", { username, password });
        // Aquí luego integras tu fetch al backend
    };

    return (
        <div
            className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/src/assets/Wallper_PeacerApp_2.webp)" }}
        >
            {/* Contenedor central estilo cristal */}
            <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/70 focus:bg-white text-gray-800 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/70 focus:bg-white text-gray-800 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="py-2 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-white">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-blue-300 hover:text-blue-100"
                    >
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    );
}
