import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
    handleOnChange,
    handleOnSubmit,
    formSwitcher,
    name,
    email,
    pass,
}) => {
    const [role, setRole] = useState(''); // State to track the selected role

    // Function to handle radio button changes
    const handleRadioChange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
        localStorage.setItem('role', selectedRole); // Store the role in localStorage
    };

    // Use useEffect to check localStorage on component mount
    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        } else {
            // Set a default role if none is stored in localStorage
            setRole('student');
            localStorage.setItem('role', 'student');
        }
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-info text-center">Create an Account</h1>
                    <hr />
                    <form autoComplete="off" onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Enter Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                required
                                onChange={handleOnChange}
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                required
                                onChange={handleOnChange}
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className='d-flex'>
                            <div className="form-check mx-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    value="student"
                                    checked={role === 'student'}
                                    onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Student
                                </label>
                            </div>
                            <div className="form-check mx-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    value="professor"
                                    checked={role === 'professor'}
                                    onChange={handleRadioChange}
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Professor
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                value={pass}
                                required
                                className="form-control"
                                id="password"
                                placeholder="password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Sign up
                        </button>
                    </form>
                    <hr />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="text-center">
                    Already have an account? &nbsp;
                    <Link to={'/auth'} onClick={() => formSwitcher("login")}>
                        login now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;


LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};