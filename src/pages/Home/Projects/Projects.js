import { Container, Grid } from '@mui/material';
import React from 'react';
import projectPhoto from '../../../images/autopro.png';
import Project from './Project/Project';

const Projects = () => {
    const projects = [
        {
            id: 101,
            name: 'Auto-Pro Luxurious Car',
            img: projectPhoto,
            description: 'This is a car selling website named AUTOPRO. In This website you can purchase world best cars with best price.',
            feature: {
                ft1: "Have a dashboard where based on the user and admin role the menu will change",
                ft2: 'After login or creating an account a user can place an order, manage his orders and post a review',
                ft3: "However, an admin can manage all orders, add or remove a product and make a new admin. Admin email : admin@admin.com and password: 123456",
                ft4: "User can buy a product form this site providing his/her address.",
                ft5: "Have different functionality for both user and admin",
                ft6: "User also can see his/her all order in my order page",
            },
            technology: {
                t1: 'React',
                t2: 'MongoDB',
                t3: 'Node',
                t4: 'Express',
                t5: 'Firebase',
                t6: 'Bootstrap',
                t7: 'Sweetalert',
                t8: "React Router",
                t9: 'React Hook Form',
                t10: ''
            },
            liveSite: 'https://auto-pro-luxurious-car.web.app/',
            clientLink: 'https://github.com/Rasalahmad/Auto-Pro-car-service-client-site',
            serverLink: 'https://github.com/Rasalahmad/Auto-Pro-server-site'
        },
        {
            id: 102,
            name: 'Auto-Pro Luxurious Car',
            img: projectPhoto,
            description: 'This is a car selling website named AUTOPRO. In This website you can purchase world best cars with best price.',
            feature: {
                ft1: "Have a dashboard where based on the user and admin role the menu will change",
                ft2: 'After login or creating an account a user can place an order, manage his orders and post a review',
                ft3: "However, an admin can manage all orders, add or remove a product and make a new admin. Admin email : admin@admin.com and password: 123456",
                ft4: "User can buy a product form this site providing his/her address.",
                ft5: "Have different functionality for both user and admin",
                ft6: "User also can see his/her all order in my order page",
            },
            technology: {
                t1: 'React',
                t2: 'MongoDB',
                t3: 'Node',
                t4: 'Express',
                t5: 'Firebase',
                t6: 'Bootstrap',
                t7: 'Sweetalert',
                t8: "React Router",
                t9: 'React Hook Form',
                t10: ''
            },
            liveSite: 'https://auto-pro-luxurious-car.web.app/',
            clientLink: 'https://github.com/Rasalahmad/Auto-Pro-car-service-client-site',
            serverLink: 'https://github.com/Rasalahmad/Auto-Pro-server-site'
        },
        {
            id: 103,
            name: 'Auto-Pro Luxurious Car',
            img: projectPhoto,
            description: 'This is a car selling website named AUTOPRO. In This website you can purchase world best cars with best price.',
            feature: {
                ft1: "Have a dashboard where based on the user and admin role the menu will change",
                ft2: 'After login or creating an account a user can place an order, manage his orders and post a review',
                ft3: "However, an admin can manage all orders, add or remove a product and make a new admin. Admin email : admin@admin.com and password: 123456",
                ft4: "User can buy a product form this site providing his/her address.",
                ft5: "Have different functionality for both user and admin",
                ft6: "User also can see his/her all order in my order page",
            },
            technology: {
                t1: 'React',
                t2: 'MongoDB',
                t3: 'Node',
                t4: 'Express',
                t5: 'Firebase',
                t6: 'Bootstrap',
                t7: 'Sweetalert',
                t8: "React Router",
                t9: 'React Hook Form',
                t10: ''
            },
            liveSite: 'https://auto-pro-luxurious-car.web.app/',
            clientLink: 'https://github.com/Rasalahmad/Auto-Pro-car-service-client-site',
            serverLink: 'https://github.com/Rasalahmad/Auto-Pro-server-site'
        },
        {
            id: 106,
            name: 'Auto-Pro Luxurious Car',
            img: projectPhoto,
            description: 'This is a car selling website named AUTOPRO. In This website you can purchase world best cars with best price.',
            feature: {
                ft1: "Have a dashboard where based on the user and admin role the menu will change",
                ft2: 'After login or creating an account a user can place an order, manage his orders and post a review',
                ft3: "However, an admin can manage all orders, add or remove a product and make a new admin. Admin email : admin@admin.com and password: 123456",
                ft4: "User can buy a product form this site providing his/her address.",
                ft5: "Have different functionality for both user and admin",
                ft6: "User also can see his/her all order in my order page",
            },
            technology: {
                t1: 'React',
                t2: 'MongoDB',
                t3: 'Node',
                t4: 'Express',
                t5: 'Firebase',
                t6: 'Bootstrap',
                t7: 'Sweetalert',
                t8: "React Router",
                t9: 'React Hook Form',
                t10: ''
            },
            liveSite: 'https://auto-pro-luxurious-car.web.app/',
            clientLink: 'https://github.com/Rasalahmad/Auto-Pro-car-service-client-site',
            serverLink: 'https://github.com/Rasalahmad/Auto-Pro-server-site'
        },
    ]
    return (
        <Container>
            <h2 className="text-center my-5">My Projects</h2>
            <Grid container spacing={4}>
                {
                    projects.map(project =>
                        <Project
                            key={project.id}
                            project={project}
                        ></Project>
                    )
                }
            </Grid>

        </Container>
    );
};

export default Projects;
