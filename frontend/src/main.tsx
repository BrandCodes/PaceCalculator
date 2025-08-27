import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RegisterForm /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
    {/* <Toaster position="top-right" reverseOrder={false} /> Estilo Normal */}
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "8px",
          background: "#222",
          color: "#fff",
        },
        success: {
          iconTheme: {
            primary: "#4ade80", // green
            secondary: "#1e293b", // dark bg
          },
        },
        error: {
          iconTheme: {
            primary: "#f87171", // red
            secondary: "#1e293b",
          },
        },
      }}
    />
  </StrictMode>,
)
