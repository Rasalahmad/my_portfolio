import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  useEffect(() => {
    // finding match service
    const foundService = projects.find((service) => service.id === id);
    setProject(foundService);
  }, [projects]);
  return (
    <Container sx={{ width: "80%", m: "auto" }}>
      <h2 className="text-center my-5">
        Details of <span style={{ color: "deeppink" }}>{project?.name}</span>
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img width="100%" height="500px" src={project?.ss1} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img width="100%" height="500px" src={project?.ss2} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img width="100%" height="500px" src={project?.ss3} alt="" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <h2 className="my-4" style={{ color: "deeppink" }}>
            Features
          </h2>
          <p>{project?.feature?.ft1}</p>
          <p>{project?.feature?.ft2}</p>
          <p>{project?.feature?.ft3}</p>
          <p>{project?.feature?.ft4}</p>
          <p>{project?.feature?.ft5}</p>
          <p>{project?.feature?.ft6}</p>
          <p>{project?.feature?.ft7}</p>
          <p>{project?.feature?.ft8}</p>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img
            width="100%"
            src="https://www.almeka.net/img/web-designing.png"
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            width="100%"
            src="https://www.sedulous.co/images/web-icons/Magento-ecommerce.png"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ textAlign: "right" }}>
          <h2 className="my-4" style={{ color: "deeppink" }}>
            Technology
          </h2>
          <p className="technology">{project?.technology?.t1}</p>
          <p className="technology">{project?.technology?.t2}</p>
          <p className="technology">{project?.technology?.t3}</p>
          <p className="technology">{project?.technology?.t4}</p>
          <p className="technology">{project?.technology?.t5}</p>
          <p className="technology">{project?.technology?.t6}</p>
          <p className="technology">{project?.technology?.t7}</p>
          <p className="technology">{project?.technology?.t8}</p>
          <p className="technology">{project?.technology?.t9}</p>
          <p className="technology">{project?.technology?.t10}</p>
          <p className="technology">{project?.technology?.t11}</p>
        </Grid>
      </Grid>
      <Box
        className="buttons"
        sx={{ display: "flex", justifyContent: "space-evenly", m: "50px" }}
      >
        <a href={project?.liveSite} target="_blank" rel="noreferrer">
          <Button
            sx={{ mx: "10px", background: "deeppink" }}
            variant="contained"
          >
            Live Demo
          </Button>
        </a>
        <a href={project?.clientLink} target="_blank" rel="noreferrer">
          <Button
            sx={{ mx: "10px", background: "deeppink" }}
            variant="contained"
          >
            Client Site GitHub Link
          </Button>
        </a>
        <a href={project?.serverLink} target="_blank" rel="noreferrer">
          <Button
            sx={{ mx: "10px", background: "deeppink" }}
            variant="contained"
          >
            Server Site GitHub Link
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default ProjectDetails;
