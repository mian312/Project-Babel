import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API } from '../../services/api';
import { DataContext } from '../../context/DataProvider';

const Header = () => {
    const [token, setToken] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    useEffect(() => {
        sessionStorage.getItem('accessToken') && setToken(true);
    }, [account]);

    // User Logout
    const handleLogOut = async (e) => {
        e.preventDefault();
        const accessToken = sessionStorage.getItem('refreshToken');
        const actualToken = accessToken?.substring(7);
        const logOutCredentials = { actualToken };

        try {
            // TODO: Fetch response from 'api/user/logout'

            // Check if logOutCredentials exist before making the request
            if (logOutCredentials) {
                // Assuming your API request is successful, clear tokens and set state
                // Here, you can replace the following line with the actual API call.
                // For now, we'll simulate a successful logout.
                // Replace this line with the actual API call:
                // const response = await fetch('api/user/logout', { method: 'POST' });

                // Simulating a successful logout:
                // const response = { status: 200 };

                // Replace this condition with actual API response handling
                // if (response.status === 200) {
                setToken(false);

                // Remove the token from session storage
                sessionStorage.removeItem('refreshToken');
                sessionStorage.removeItem('accessToken');
                localStorage.removeItem('account');

                // Showing user notification
                toast.success('Successfully Logged Out');
            } else {
                // Handle API error response with a 
                // const errorMessage = response.data.msg || 'Something went wrong! Please try again later.';
                const errorMessage = 'Something went wrong! Please try again later.';

                // Showing user notification
                toast.error(errorMessage);
            }
        } catch (error) {
            // Handle network or unexpected errors
            toast.error('Sorry! Something went wrong!');
            console.warn(error);
        }
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary h-100">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Project Babel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                        <Link className="nav-link" to={'/about'}>About</Link>
                        {
                            token ? (
                                <Link className="nav-link" to={'/home'} onClick={handleLogOut}>Logout</Link>
                            ) : (
                                <Link className="nav-link" to={'/auth'}>Sign In</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Header