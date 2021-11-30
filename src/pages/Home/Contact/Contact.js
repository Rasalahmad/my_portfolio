import { Button, Box, Grid, TextField } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import './Contact.css'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_edeojxg', 'template_gaddxkd', e.target, 'user_kBdosIQgKbX8d1n4KGeIv')
            .then(res => {
                if (res.text) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Send Successfully!! Thank You',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Something went wrong!! Try again',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    return (
        <Box sx={{ width: '90%', m: 'auto' }}>
            <h1 className="text-center my-5">CONTACT ME</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <h3>GET IN TOUCH</h3>
                    <p>Hello! This is Rasal Ahmad and I am a Junior Full Stack Web Developer. You can contact me with this information Hello! This is Rasal Ahmad and I am a Junior Full Stack Web Developer. You can contact me with this information</p>
                    <h2><i className="fas fa-map-marker-alt"></i> Address </h2>
                    <p>Bandarban, Bangladesh</p>
                    <h2><i className="fas fa-envelope"></i> Email </h2>
                    <p>rasalahmadsit@gmail.com</p>
                    <h2><i className="fas fa-phone"></i> Phone </h2>
                    <p>+8801625605340</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="form-field">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ m: '10px', width: '45%' }}
                            label="Name"
                            placeholder="Your Name"
                            type="text"
                            name="name"
                        />
                        <TextField
                            sx={{ my: '10px', width: '50%' }}
                            label="Email"
                            type="email"
                            name="user_email"
                        /><br />
                        <TextField
                            sx={{ m: '10px', width: '97%' }}
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            name="message"
                        />
                        <Button sx={{ width: '97%', m: '10px' }} variant="contained" type="submit" endIcon={<SendIcon />}>
                            SEND MESSAGE
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;