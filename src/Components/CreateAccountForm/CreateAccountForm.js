import { Button, Card, FormHelperText, makeStyles, TextField } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import './CreateAccountForm.css';
import { createUserWithEmailAndPassword, initializeLoginFramework } from '../../loginManeger';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 370,
        padding: '30px  30px 15px',
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
const CreateAccountForm = () => {
    const classes = useStyles();

    //initialize 
    initializeLoginFramework();
    //Email Login State
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        error: "",
        validate: "",
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/hotel" } };
    // Text Field Function
    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);


            // console.log(isEmailValid);
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
    };

    //Form Submit Function
    const handleSubmit = (e) => {
        if (user.password !== user.confirm_password) {
            user.validate = "Password doesn't match";
        }
        if (user.password === user.confirm_password) {
            if (user.email && user.password) {
                createUserWithEmailAndPassword(user.email, user.password, user.first_name, user.last_name)
                    .then(res => {
                        setUser(res);
                        setLoggedInUser(res);
                        history.replace(from);
                    })
                    .catch(error => {
                        setUser(error);
                    })
            }
        }
        e.preventDefault();
    }
    return (
        <>
            <Card className={classes.root}>
                <h3 className="login-text">Create an account</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} id="firstName-field" name="first_name" label={<span className="input-text">First Name</span>} type="text" required />


                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} id="lastName-field" name="last_name" label={<span className="input-text">Last Name</span>} ype="text" required />

                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} id="email-field" name="email" label={<span className="input-text">Email</span>} type="email" required />

                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} id="pass-field" name="password" label={<span className="input-text">Password</span>} type="password" required />


                    <TextField InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                        className={classes.textField} onBlur={handleBlur} id="confirmPass-field" name="confirm_password" label={<span className="input-text">Confirm Password</span>} type="password" required />
                    <FormHelperText className={classes.err} id="pass-err-message">{user.validate}</FormHelperText>
                    <Button className="login-button" variant="contained" type="submit">
                        Create an account
                        </Button>
                    <p className="input-text">Already have an account? <Link to="/login" className="link-item">Login</Link></p>
                </form>
                <h5 className={classes.err}>{user.error}</h5>
            </Card>
        </>
    );
};

export default CreateAccountForm;