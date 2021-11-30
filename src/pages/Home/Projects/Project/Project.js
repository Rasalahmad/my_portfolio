import { Grid } from '@mui/material';
import React from 'react';

const Project = ({ project }) => {
    const { img } = project;
    // console.log(feature)
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img src={img} alt="" />
        </Grid>
    );
};

export default Project;
