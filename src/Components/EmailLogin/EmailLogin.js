import { Button, Card, Checkbox, FormControlLabel, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, signInWithEmailAndPassword } from '../../loginManeger';
import './EmailLogin.css';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 370,
        padding: '40px  30px 20px',
        border: '1px solid #ABABAB'
    },
    textField: {
        width: '100%',
        margin: '8px 0'
    },
    //style for font size
    resize: {
        fontSize: 16,
        fontWeight: 600,
        color: '#000',
        fontFamily: "'Montserrat', sans-serif",
    },
    err: {
        color: 'red'
    }
}));

const EmailLogin = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    //initialize 
    initializeLoginFramework();
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: "",
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/hotel" } };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordHasNumber && isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })
                .catch(error => {
                    setUser(error);
                })
        }
        e.preventDefault();
    }
    return (
        <>

            <Card className={classes.root}>
                <h3 className="login-text">Login</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} name="email" type="email" label={<span className="input-text">Username or Email</span>} required />
                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} name="password" label={<span className="input-text">Password</span>} type="password" required />
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={handleChange} style={{
                                    color: "#F9A51A",
                                }} />}
                                label={<span className="input-text">Remember Me</span>}
                            />
                        </Grid>
                        <Grid item>
                            <Link className="link-item">Forget Password</Link>
                        </Grid>
                    </Grid>
                    <Button className="login-button" variant="contained" type="submit">
                        Login
                        </Button>
                    <p className="input-text">Don’t have an account? <Link to="/signup" className="link-item">Create an account</Link></p>
                    <h5 className={classes.err}>{user.error}</h5>
                </form>
            </Card>
        </>
    );
};

export default EmailLogin;