import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import './Skills.css'
import icon1 from '../../../images/icon-1.png'
import icon2 from '../../../images/icon-2.png'
import icon3 from '../../../images/icon-3.png'
import icon4 from '../../../images/icon4.png'
import icon5 from '../../../images/icon-5.png'
import icon6 from '../../../images/icon-6.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: '1200' })
    }, [])
    return (
        <div data-aos="fade-right">
            <h1 className='text-center my-5'>SKILLS</h1>
            <Box className="skills-icons">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
            </Box>
        </div>
    );
};

export default Skills;