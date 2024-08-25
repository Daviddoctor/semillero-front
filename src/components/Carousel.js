import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia, CardContent, Typography, CircularProgress, Box, Fade } from '@mui/material';
import axios from 'axios';
import api from '../../api/routes/file-service';

const Carousel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(api.getImages);
        console.log(response.data.result.images);
        if (response.status === 200) setProjects(response.data.result.images);
        else console.error("Response is not 200", response);
      } catch (error) {
        console.error('Error fetching projects: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Box sx={{ height: '400px', position: 'relative' }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              position: 'absolute',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 10,
            }}
          >
            <CircularProgress />
          </Box>
        </Fade>
        {!loading && (
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <Card sx={{ margin: '0 auto' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.base64.startsWith('data:image') ? project.base64 : `data:image/jpeg;base64,${project.base64}`}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        )}
      </Box>
    </div>
  );
};

export default Carousel;
