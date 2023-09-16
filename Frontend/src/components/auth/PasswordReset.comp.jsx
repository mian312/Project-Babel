import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PasswordReset = ({
    handleOnChange,
    handleOnResetSubmit,
    formSwitcher,
    email,
}) => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-info text-center">Reset Password</h1>
                <hr />
                <form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Enter your email address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            className="form-control"
                            id="email"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Reset Password
                    </button>
                </form>
                <hr />
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="text-center">
                <Link to={'/auth'} onClick={() => formSwitcher("login")}>
                    Login Now
                </Link>
            </div>
        </div>
    </div>
);

export default PasswordReset;


PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};