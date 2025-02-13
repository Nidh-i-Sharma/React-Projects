import React from "react";
import { Box, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';


const Github = () => {
    return (
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image="https://images.pexels.com/photos/30617072/pexels-photo-30617072/free-photo-of-majestic-stone-lion-statue-under-desert-moon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background Image"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography gutterBottom variant="h3" component="div" fontWeight="bold">
              Welcome to Home
            </Typography>
            <Typography variant="h6" color="inherit" mb={2}>
              Discover more about our journey and values.
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="large" variant="contained" color="primary">Share</Button>
              <Button size="large" variant="outlined" color="secondary">Learn More</Button>
            </CardActions>
          </CardContent>
        </Box>
      );
};

export default Github;
