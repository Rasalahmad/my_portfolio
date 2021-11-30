import { Box } from '@mui/system';
import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div>
            <h1 className='text-center my-5'>SKILLS</h1>
            <Box>
                <img className="skill-img" src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/html@0.0.1/html_256x256.png" alt="" />
                <img className="skill-img" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo-768x768.png" alt="" />
                <img className="skill-img" src="https://www.vhv.rs/dpng/d/543-5435412_javascript-programming-language-logo-hd-png-download.png" alt="" />
                <img className="skill-img" src="https://w7.pngwing.com/pngs/322/725/png-transparent-node-js-javascript-npm-express-js-sharp-miscellaneous-angle-text-thumbnail.png" alt="" />
                <img className="skill-img" src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" alt="" />
            </Box>
        </div>
    );
};

export default Skills;