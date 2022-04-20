import React, { useEffect } from "react";
import { Box } from "@mui/system";
import Carousel from "react-elastic-carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Skills.css";
import webIcon from "../../../images/web-icon.png";
import Aos from "aos";
import "aos/dist/aos.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const reviews = [
  {
    id: 101,
    name: "WEB DEVELOPMENT",
    img: webIcon,
    tech1: ">> HTML",
    tech2: ">> JavaScript",
    tech3: ">> TypeScript",
    tech4: ">> React",
    tech5: ">> Redux",
    tech6: ">> React Native",
    tech7: ">> CSS",
    html: "html",
  },
  {
    id: 102,
    name: "IOS DEVELOPMENT",
    img: webIcon,
    tech1: ">> HTML",
    tech7: ">> CSS",
    tech2: ">> JavaScript",
    tech3: ">> TypeScript",
    tech4: ">> React",
    tech5: ">> Redux",
    tech6: ">> React Native",
  },
  {
    id: 103,
    name: "ANDROID DEVELOPMENT",
    img: webIcon,
    tech1: ">> HTML",
    tech7: ">> CSS",
    tech2: ">> JavaScript",
    tech3: ">> TypeScript",
    tech4: ">> React",
    tech5: ">> Redux",
    tech6: ">> React Native",
  },
  {
    id: 104,
    name: "WEB DESIGN",
    img: webIcon,
    tech1: ">> HTML",
    tech7: ">> CSS",
    tech2: ">> JavaScript",
    tech3: ">> TypeScript",
    tech4: ">> React",
    tech5: ">> Redux",
    tech6: ">> React Native",
  },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: "1200" });
  }, []);

  return (
    <div id="skill">
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        My SKILLS
      </h1>
      <Carousel breakPoints={breakPoints}>
        {reviews.map((review) => (
          <Card
            data-aos="fade-right"
            style={{
              marginRight: "35px",
              width: "300px",
              // height: "300px",
              background: "#292222",
              color: "#ffffff",
            }}
          >
            <Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alginItems: "center",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    filter:
                      "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)",
                  }}
                  width="100px"
                  src={review?.img}
                  alt=""
                />
              </Box>
              <Box sx={{ px: "20px" }}>
                <Typography variant="h6">{review?.name}</Typography>
                <Typography variant="body2">
                  {review?.tech1}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="html"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech7}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="css"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech2}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="js"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech3}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="ts"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech4}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="react"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech5}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="redux"></span>
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  {review?.tech6}
                  <div className="meter">
                    <span style={{ width: "100%" }}>
                      <span className="native"></span>
                    </span>
                  </div>
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {review?.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Skills;
