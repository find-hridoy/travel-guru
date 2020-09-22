
import React from 'react';
import './Header.css';
import logo from '../../Image/white-logo.png';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Button, Container, InputBase, Link, MenuItem, MenuList, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '20px 0'
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.20),
        },
        marginRight: 60,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        color: 'white',
        border: '1px solid #ffffff70',
        borderRadius: '5px',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <img src={logo} alt="Logo" />
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search your Destination..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
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

export default Header;