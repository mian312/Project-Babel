import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { API } from '../../services/api';
import { DataContext } from '../../context/DataProvider';

const Header = () => {
    const [token, setToken] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    useEffect(() => {
        setToken(true);
    }, [account]);

    // User Logout
    const handleLogOut = async (e) => {
        e.preventDefault();
        const accessToken = sessionStorage.getItem('refreshToken');
        const actualToken = accessToken?.substring(7);
        const logOutCredentials = { actualToken };

        try {
            // TODO: Fetch response from 'api/user/logout'

            setToken(false);

            // On response being fetched
            if (logOutCredentials) {
                // Remove the token from session storage
                sessionStorage.removeItem('refreshToken');
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
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                        <Link className="nav-link" to={'/about'}>About</Link>
                        {
                            !token ? (
                                <Link className="nav-link" to={'/auth'}>Sign In</Link>
                            ) : (
                                <Link className="nav-link" to={'/home'} onClick={handleLogOut}>Logout</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Header