import React from 'react';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import DarkHeader from '../DarkHeader/DarkHeader';
import FacebookLogin from '../FacebookLogin/FacebookLogin';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './CreateAccount.css';

const CreateAccount = () => {
    return (
        <>
            <DarkHeader />
            <div className="create-account-form">
                <CreateAccountForm />
                <div className="another-login-form">
                    <GoogleSignIn /> <br /> <br />
                    <FacebookLogin />
                </div>
            </div>
        </>
    );
};

export default CreateAccount;