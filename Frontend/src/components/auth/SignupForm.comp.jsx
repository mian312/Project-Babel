import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  name,
  email,
  pass,
}) => (
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

export default LoginForm;


LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};