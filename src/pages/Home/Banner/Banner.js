import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import resume from '../../../resume.pdf';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <Box sx={{ width: '80%', m: 'auto' }}>
            <Grid container spacing={2} sx={{ pt: '100px' }}>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: '300px', borderRadius: '50%' }} src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/199091597_1194070917685323_5100945657730497712_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXKLo75OjQOnzJL9pDFAKfcvaSZI4XOkFy9pJkjhc6QUQMcsVd4kS9RbiWYZ2z8vdaroDp_d4V04wTlloL1NEL&_nc_ohc=Pb0VQaSkiBIAX_AwerI&_nc_ht=scontent.fcgp7-1.fna&oh=2b25c71d3d8c66f58c8db67788c262bd&oe=61CA7770" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <span>My Name Is</span>
                    <h1>RASAL AHMAD</h1>
                    <h3>I Am A <p style={{ color: 'deeppink' }}> <Typewriter
                        options={{
                            strings: ['Junior Full Stack Developer', 'Graphic Designer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </p>
                    </h3>
                    <p>Develop amazing web and app experiences with tips and advice from the experts at Web.Dev. Keep your users engaged with the latest web development capabilities! Website Performance. Website Visibility. Modern Web Techniques. Network Resilience Tips.</p>
                    <a href={resume} download ><Button variant="contained" startIcon={<SaveIcon />}>
                        Download CV
                    </Button></a>
                    <a href="#contact">
                        <Button sx={{ mx: '10px', background: 'deeppink' }} variant="contained" startIcon={<SaveIcon />} >
                            Hire Me
                        </Button></a>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;