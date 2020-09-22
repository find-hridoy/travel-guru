import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignIn, initializeLoginFramework } from '../../loginManeger';
import './GoogleSignIn.css';
import icons from '../../Icon/google.png';
import homeData from '../../FakeData/homeData';

const GoogleSignIn = () => {
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
    const handleGoogleSignIn = () => {
        googleSignIn()
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
            <Link className="button-item">
                <Button onClick={handleGoogleSignIn} className="another-login-button" variant="contained" type="submit">
                    <img src={icons} alt="FB Icon" />
                    Continue with Google
                </Button>
            </Link>
        </>
    );
};

export default GoogleSignIn;