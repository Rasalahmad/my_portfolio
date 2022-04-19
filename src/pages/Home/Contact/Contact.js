import { Button, Box, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import whatsapp from "../../../images/whatappicon.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_edeojxg",
        "template_gaddxkd",
        e.target,
        "user_kBdosIQgKbX8d1n4KGeIv"
      )
      .then((res) => {
        if (res.text) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Send Successfully!! Thank You",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!! Try again",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  useEffect(() => {
    Aos.init({ duration: "1200" });
  }, []);

  return (
    <Box className="contact-container" id="contact">
      <Box sx={{ width: "90%", m: "auto" }}>
        <h1 className="text-center" style={{ margin: "100px 0px" }}>
          CONTACT ME
        </h1>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} data-aos="fade-right">
            <h3>GET IN TOUCH</h3>
            <p>
              Hello! This is Rasal Ahmad and I am a Junior Full Stack Web
              Developer. You can contact me with this information Hello! This is
              Rasal Ahmad and I am a Junior Full Stack Web Developer. You can
              contact me with this information
            </p>
            <h4>
              <i className="fas fa-map-marker-alt"></i> Address{" "}
            </h4>
            <p>Bandarban, Bangladesh</p>
            <h4>
              <i className="fas fa-envelope"></i> Email{" "}
            </h4>
            <p>rasalahmadsit@gmail.com</p>
            <h4>
              <i className="fas fa-phone"></i> Phone{" "}
            </h4>
            <p>+8801625605340</p>
            {/* <a
              className="whatsapplink"
              href="https://api.whatsapp.com/send?phone=8801625605340"
              target="_blank"
              rel="noreferrer"
            >
              <div className="whatsappContainer">
                <img src={whatsapp} alt="whatsapp" className="whatsapp" />
                <h4>WhatsApp </h4>
              </div>
              +8801625605340
            </a> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="form-field mt-5"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ m: "10px", width: "45%" }}
                label="Name"
                placeholder="Your Name"
                type="text"
                name="name"
              />
              <TextField
                sx={{ my: "10px", width: "50%" }}
                label="Email"
                type="email"
                name="user_email"
              />
              <br />
              <TextField
                sx={{ m: "10px", width: "97%" }}
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                name="message"
              />
              <Button
                sx={{ width: "97%", m: "10px" }}
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
              >
                SEND MESSAGE
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
