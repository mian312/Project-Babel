import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from '../../services/api';
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

    // Handle changes made on input
    const handleOnChange = (e) => {
        // Getting the target
        const { name, value } = e.target;

        // Switch between the 'name' of the inputs
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

    // Handle user logout
    const handleLogin = async (e) => {
        // Prevent default reload on form submit
        e.preventDefault();
        // Setting login credential
        const loginCredentials = { email, password };
    
        try {
            // Fetching responce from 'api/user/login'
            const response = await API.userLogin(loginCredentials);
    
            // On responce being fetched
            if (response.isSuccess) {
                // Setting sessionStorage value
                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                // setAccount({ name: response.data.name, username: response.data.username });
                // isUserAuthenticated(true)

                // Showing user notification
                toast.success('Successfully Logged In');
                // Navigating to main page
                navigate('/app');
            } else {
                // Handle API error response with a 
                const errorMessage = response.data.msg || 'Something went wrong! Please try again later.';
                // Showing user notification
                toast.error(errorMessage);
            }
        } catch (error) {
            // Handle network or unexpected errors
            toast.error('Wrong Email or Password');
        }
    };
    

    const handleSignup = async (e) => {
        e.preventDefault();
        const signupCredentials = { name, email, password }

        try {
            // Fetching responce from 'api/user/login'
            const response = await API.userSignup(signupCredentials);
    
            // On responce being fetched
            if (response.isSuccess) {
                // Showing user notification
                toast.success('Successfully Created Account');
                // login User
                handleLogin(e);
            } else {
                // Handle API error response with a 
                const errorMessage = response.data.msg || 'Something went wrong! Please try again later.';
                // Showing user notification
                toast.error(errorMessage);
            }
        } catch (error) {
            // Handle network or unexpected errors
            toast.error('Account already exists');
        }
    };

    // Handle Password reset form
    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        // TODO call api to submit the form
        console.log("Email : ", email);
        toast.warn("This feature is still not implimented")
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