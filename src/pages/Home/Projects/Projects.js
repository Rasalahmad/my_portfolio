import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Project from "./Project/Project";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Aos.init({ duration: "1200" });
  }, []);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <Box sx={{ width: "90%", m: "auto" }} id="projects">
      <h2
        className="text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        My Projects
      </h2>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
