import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/AuthActions';
import axios from 'axios';

import Home from '../../jsx/components/Dashboard/Home';


function Login(props) {
    const [username, setUsername] = useState("superuser");
    const [password, setPassword] = useState("Shax2003");
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [error, setError] = useState("");
    // const dispatch = useDispatch();
    const nav = useNavigate();

    // const handleRowClick = (url) => {
    //     window.location.href = url;
    // };

    const onLogin = async (e) => {
        e.preventDefault();
        let error = false;
        let errorsObj = { username: '', password: '' };

        // Simple form validation
        if (!username) {
            errorsObj.username = 'Username is required';
            error = true;
        }
        if (!password) {
            errorsObj.password = 'Password is required';
            error = true;
        }
        setErrors(errorsObj);

        if (error) return;

        // Show loading spinner
        // dispatch(loadingToggleAction(true));

        try {
            // Make the login request to FastAPI backend
            const response = await axios.post("https://280e-84-54-76-83.ngrok-free.app/api/v1/auth/superusers/sign_in/", 
                new URLSearchParams({
                    username: username,
                    password: password
                }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );


            console.log(response.data);

            // Save the JWT token in localStorage
            // localStorage.setItem("token", response.data.access_token);
            // console.log('Token stored:', localStorage.getItem("token"));

            // Dispatch Redux login action
            // dispatch(loginAction(username, password, nav));

            // Navigate to dashboard
            
            nav("", Home);

        } catch (error) {
            // Handle any error from the backend
            setError("Invalid login credentials");
            // dispatch(loadingToggleAction(false));  // Turn off loading spinner
        }
    };

    return (

        <div className="login-form-bx">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-7 box-skew d-flex">
                        <div className="authincation-content">
                            <div className="mb-4">
                                <h3 className="mb-1 font-w600">Welcome to Weel</h3>
                                <p>Sign in by entering information below</p>
                            </div>
                            {props.errorMessage && (
                                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                    {props.errorMessage}
                                </div>
                            )}
                            {props.successMessage && (
                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
                            <form onSubmit={onLogin}>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="username">
                                        <strong>Username</strong>
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    {errors.username && <div className="text-danger fs-12">{errors.username}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="mb-2" htmlFor="password">
                                        <strong>Password</strong>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                </div>
                                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox ms-1 ">
                                            <input type="checkbox" className="form-check-input" id="basic_checkbox_1"/>
                                            <label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block" disabled={props.showLoading} >
                                        {props.showLoading ? 'Signing In...' : 'Sign In'}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Login);