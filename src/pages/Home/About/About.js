import { Grid, Box } from '@mui/material';
import React from 'react';
import Skills from '../Skills/Skills';
import './About.css'

const About = () => {
    return (
        <Box sx={{ mt: '50px', width: '90%', m: 'auto' }}>
            <h1 className="text-center my-5">ABOUT ME</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <h3 className="my-3">PERSONAL INFO</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p>Name: Rasal Ahmad</p>
                            <p>Age : 21</p>
                            <p>Email: rasalahmadsit@gmail.com</p>
                            <p>Address: Chattogram, Bangladesh</p>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <p>Skill: FULL STACK</p>
                            <p>Experience: 1 year</p>
                            <p>Language: Bangla, English</p>
                            <p>Condition: Available</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className="experience-container">
                                <h1>1+</h1>
                                <p>Year experience</p>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className="experience-container">
                                <h1>20+</h1>
                                <p>Happy Clients</p>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className="experience-container">
                                <h1>25+</h1>
                                <p>Project Completed</p>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className="experience-container">
                                <h1>5+</h1>
                                <p>Awards Won</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Skills></Skills>
        </Box>
    );
};

export default About;