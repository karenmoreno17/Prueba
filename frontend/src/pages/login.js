import React, { useState } from "react";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = { email, password };

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            console.log("Respuesta de la API:", data);

            if (response.ok && data.body && data.body.id) {
                localStorage.setItem('userId', data.body.id);
                if (data.isAdmin) {
                    window.location.href = '/admin';
                } else {
                    window.location.href = '/client';
                }
            } else {
                console.log("Error al verificar las credenciales o la respuesta no contiene datos.");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Ingrese a su cuenta</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}
