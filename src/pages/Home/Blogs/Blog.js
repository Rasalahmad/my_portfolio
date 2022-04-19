import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Blog = ({ blog }) => {
  const { title, desc, img, link } = blog;
  return (
    <Grid item xs={12} sm={6} md={4} data-aos="fade-right" id="blog">
      <Card
        className="cardContainer"
        sx={{
          maxWidth: 345,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.white">
            {desc.slice(0, 150)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={link} target="_blank" rel="noreferrer">
              READ NOW
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Blog;
