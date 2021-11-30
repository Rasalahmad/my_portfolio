import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function Navbar() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
    });
    const { navItem, navIcon, navItemContainer } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link to="/home">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/about">About</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/projects">My Projects</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/contact">Contact Me</Link>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
                            RASAL
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to='/home'>
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/about'>
                                <Button color="inherit">About</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/projects'>
                                <Button color="inherit">My Projects</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/contact'>
                                <Button color="inherit">Contact Me</Button>
                            </NavLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}