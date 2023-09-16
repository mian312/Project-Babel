import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.pg.css'
import LoginForm from '../../components/auth/LoginForm.comp';
import PasswordReset from '../../components/auth/PasswordReset.comp';
import SignupForm from '../../components/auth/SignupForm.comp';

const Auth = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            case "name":
                setName(value);
                break;

            default:
                break;
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // TODO call api to submit the form
        toast.success('Successfully Logged In')
        navigate('/app')
    };

    const handleSignup = (e) => {
        e.preventDefault();

        // TODO call api to submit the form
        toast.success('Successfully Created account')
        navigate('/app')
    };
    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        // TODO call api to submit the form
        console.log("Email : ", email);
        toast.success("Email send to the following email for password reset")
    };

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType);
    };

    return (
        <div className="auth-page">
            <Helmet><title>Login to Continue</title></Helmet>
            <div className="form-box jumbotron">
                {frmLoad === "login" && (
                    <LoginForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleLogin}
                        formSwitcher={formSwitcher}
                        email={email}
                        pass={password}
                    />
                )}

                {frmLoad === "rest" && (
                    <PasswordReset
                        handleOnChange={handleOnChange}
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                    />
                )}

                {frmLoad === "signup" && (
                    <SignupForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleSignup}
                        formSwitcher={formSwitcher}
                        name={name}
                        email={email}
                        pass={password}
                    />
                )}
            </div>
        </div>
    );
}

export default Auth