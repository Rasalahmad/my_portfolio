import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import resume from "../../../resume.pdf";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import ProfilePic from "../../../images/my_profile.jpeg";
import Particles from "react-tsparticles";

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Box sx={{ width: "80%", m: "auto" }}>
        <Grid container spacing={2} sx={{ pt: "50px" }}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              className="profilePic"
              src={ProfilePic}
              alt="Profile"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{ paddingTop: "50px" }}>
            <span>My Name Is</span>
            <h1>RASAL AHMAD</h1>
            <h3 style={{ display: "flex" }}>
              I Am
              <p style={{ color: "deeppink", marginLeft: "5px" }}>
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Frontend Developer",
                      "Full Stack Developer",
                      "React Js Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </h3>
            <p>
              Develop amazing web and app experiences with tips and advice from
              the experts at Web.Dev. Keep your users engaged with the latest
              web development capabilities! Website Performance. Website
              Visibility. Modern Web Techniques. Network Resilience Tips.
            </p>
            <a className="buttons" href={resume} download>
              <Button variant="contained" startIcon={<SaveIcon />}>
                Download CV
              </Button>
            </a>
            <a className="buttons" href="#contact">
              <Button
                sx={{ mx: "10px", background: "deeppink" }}
                variant="contained"
                startIcon={<SaveIcon />}
              >
                Hire Me
              </Button>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
