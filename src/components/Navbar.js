import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#007B3E' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        style={{ height: '40px', width: 'auto', marginRight: '16px', cursor: 'pointer' }}
                        onClick={handleLogoClick}
                    />
                </Typography>
                <Link href="/" passHref>
                    <Button color="inherit" sx={{ color: '#FFFFFF' }}>Inicio</Button>
                </Link>
                <Link href="/proyectos" passHref>
                    <Button color="inherit" sx={{ color: '#FFFFFF' }}>Proyectos</Button>
                </Link>
                <Link href="/acerca-de" passHref>
                    <Button color="inherit" sx={{ color: '#FFFFFF' }}>Acerca de</Button>
                </Link>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        sx={{ color: '#FFFFFF' }}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {isAuthenticated ? (
                            [
                                <MenuItem key="perfil" onClick={handleClose}>
                                    <Link href="/perfil" passHref>
                                        <Button color="inherit">Perfil</Button>
                                    </Link>
                                </MenuItem>,
                                <MenuItem key="configuracion" onClick={handleClose}>
                                    <Link href="/configuracion" passHref>
                                        <Button color="inherit">Configuración</Button>
                                    </Link>
                                </MenuItem>,
                                <MenuItem key="logout" onClick={handleClose}>
                                    <Link href="/logout" passHref>
                                        <Button color="inherit">Cerrar sesión</Button>
                                    </Link>
                                </MenuItem>
                            ]
                        ) : (
                            [
                                <MenuItem key="login" onClick={handleClose}>
                                    <Link href="/login" passHref>
                                        <Button color="inherit">Inicio de Sesión</Button>
                                    </Link>
                                </MenuItem>,
                                <MenuItem key="registro" onClick={handleClose}>
                                    <Link href="/registro" passHref>
                                        <Button color="inherit">Registro</Button>
                                    </Link>
                                </MenuItem>
                            ]
                        )}

                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
