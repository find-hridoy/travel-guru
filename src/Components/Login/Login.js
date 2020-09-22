import React from 'react';
import DarkHeader from '../DarkHeader/DarkHeader';
import EmailLogin from '../EmailLogin/EmailLogin';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Login.css'

const Login = () => {
    return (
        <>
            <DarkHeader />
            <div className="email-login-form">
                <EmailLogin />
                <div className="another-login-form">
                    <GoogleSignIn /> <br /> <br />
                    <FacebookLogin />
                </div>
            </div>
        </>
    );
};

export default Login;