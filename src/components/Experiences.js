import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [experience, setExperience] = useState('');
    
    const handleAddExperience = () => {
        setExperiences([...experiences, experience]);
        setExperience('');
    };
    
    return (
        <div>
        <h2>Experiencias</h2>
        <Card className="styled-card">
            <CardContent>
            <TextField
                fullWidth
                label="Escribe tu experiencia"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
            />
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleAddExperience}
            >
                Agregar
            </Button>
            </CardContent>
        </Card>
        <div>
            {experiences.map((experience, index) => (
            <Card key={index} className="styled-card">
                <CardContent>
                <Typography>{experience}</Typography>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    );
};

export default Experiences;