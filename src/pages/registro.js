import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Link,
    Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import api from '../../api/routes/auth-service';

const RegisterPage = () => {
    const router = useRouter();
    const [names, setNames] = useState('');
    const [surNames, setSurNames] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            const response = axios.post(api.register, {
                names: names,
                surNames: surNames,
                email: email,
                password: password,
            });
            console.log(response);
            if (response.status === 200) {
                setAlertOpen(true);
                setAlertMessage('Usuario registrado correctamente');
                setAlertSeverity('success');
                router.push('/login');
            } else {
                console.error('Response is not 200', response);
            }
        } catch (error) {
            console.error('Error registering: ', error);
            setAlertOpen(true);
            setAlertMessage('Error al registrar el usuario');
            setAlertSeverity('error');
        }
    };

    const handleCancel = () => {
        setEmail('');
        setPassword('');
    };

    const handleCloseAlert = () => {
        setAlertOpen(false);
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
                    Registro
                </Typography>
                <form onSubmit={handleRegister} style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="names"
                        label="Nombres"
                        name="names"
                        autoComplete="names"
                        autoFocus
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="surNames"
                        label="Apellidos"
                        name="surNames"
                        autoComplete="surNames"
                        autoFocus
                        value={surNames}
                        onChange={(e) => setSurNames(e.target.value)}
                    />
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
                            Registrarse
                        </Button>
                        <Link href="/login">
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
                        <Link href="/login" variant="body2">
                            ¿Ya tienes una cuenta? Inicia sesión
                        </Link>
                    </Box>
                    <Snackbar
                        open={alertOpen}
                        autoHideDuration={6000}
                        onClose={handleCloseAlert}
                    >
                        <MuiAlert
                            elevation={6}
                            variant="filled"
                            onClose={handleCloseAlert}
                            severity={alertSeverity}
                        >
                            {alertMessage}
                        </MuiAlert>
                    </Snackbar>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterPage;