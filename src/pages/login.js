import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import api from "../../api/routes/auth-service";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(api.login, {
                email: email,
                password: password,
            });
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                router.push("/proyectos");
            } else {
                console.error("Response is not 200", response);
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    const handleCancel = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={8}
            >
                <Typography variant="h5" component="h1" gutterBottom>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleLogin} style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Iniciar Sesión
                        </Button>
                        <Link href="/">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleCancel}
                            >
                                Cancelar
                            </Button>
                        </Link>
                    </Box>
                    <Box mt={2}>
                        <Link href="/registro" variant="body2">
                            ¿No tienes una cuenta? Regístrate
                        </Link>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage;