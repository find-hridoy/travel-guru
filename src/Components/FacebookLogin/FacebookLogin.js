import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { facebookSignIn, initializeLoginFramework } from '../../loginManeger';
import icons from '../../Icon/fb.png';
import './FacebookLogin.css';

const FacebookLogin = () => {
    //initialize 
    initializeLoginFramework();
    const [user, setUser] = useState({
        email: "",
        name: "",
        photo: "",
        error: "",
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/hotel" } };
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(error => {
                setUser(error);
            })
    }
    return (
        <>
            <Link className="fb-button-item">
                <Button onClick={handleFacebookSignIn} className="fb-login-button" variant="contained" type="submit">
                    <img src={icons} alt="FB Icon" />
                    Continue with Facebook
                </Button>
            </Link>
        </>
    );
};

export default FacebookLogin;