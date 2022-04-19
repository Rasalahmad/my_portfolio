import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import "./Education.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: "1200" });
  }, []);
  return (
    <div id="education">
      <h1
        className="text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        EDUCATION
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="education-details" data-aos="fade-right">
            <Box className="education-single">
              <h5>2014-2016</h5>
              <p className="my-2">Secondary School Certificate</p>
              <p>
                I complete my secondary level study from Hashimpur M. A. K. U
                hight school under the Chattogram Board. I complete my SSC with
                a good result{" "}
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="education-details" data-aos="fade-left">
            <Box className="education-single">
              <h5>2016-2018</h5>
              <p className="my-2">Higher Secondary School Certificate</p>
              <p>
                I complete my secondary higher secondary study from Gachhbaria
                government college under the Chattogram Board. I complete my HSC
                with a good result{" "}
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="education-details" data-aos="fade-right">
            <Box className="education-single">
              <h5>2019-2022</h5>
              <p className="my-2">B.Sc in CSE</p>
              <p>
                I am studying at Bandarban University department of Computer
                Science and Engineering. I will compete my bachelor degree from
                here with 2020
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="education-details" data-aos="fade-left">
            <Box className="education-single">
              <h5>2014-2016</h5>
              <p className="my-2">Full Stack Developer</p>
              <p>
                I complete web development course recently from Programming
                Hero. I learn about MERN stack from here and I complete more
                than 20 project
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
