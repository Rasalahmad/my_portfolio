import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { img, name, description, id } = project;
    // console.log(feature)
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="cardContainer" sx={{ maxWidth: 345, backgroundColor: 'black', color: 'white' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.white">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/project/${id}`}><Button size="small">Details</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Project;
