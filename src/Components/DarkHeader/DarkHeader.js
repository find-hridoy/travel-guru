import { AppBar, Button, Container, fade, makeStyles, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../Image/Logo.png';
import './DarkHeader.css'


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '20px 0',
        color: 'black'
    },
    loginBtn: {
        backgroundColor: '#F9A51A',
        borderRadius: '5px',
        fontWeight: 600,
        boxShadow: 'none',
        marginLeft: '40px',
        "&:hover": {
            backgroundColor: '#F9A51A',
        }
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const DarkHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <img className="logo" src={logo} alt="Logo" />
                        </Typography>
                        <MenuItem>News</MenuItem>
                        <MenuItem>Destination</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Contact</MenuItem>
                        <Button className={classes.loginBtn} variant="contained">
                            Login
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default DarkHeader;