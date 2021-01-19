import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="userForm">
            <div className="formContainer shadowDark">
                <h1 data-cy='title'>Login</h1>

                <form
                    onSubmit={handleSubmit}
                    data-cy="form-login"
                >
                    <div className="fieldForm">
                        <label htmlFor="email">Email</label>
                        <input
                            data-cy="email-input"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">
                        <label htmlFor="password">Password</label>
                        <input
                            data-cy="password-input"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">
                        <input
                            data-cy="submit-login"
                            type="submit"
                            value="Login"
                            className="btn btn-primary btn-block"
                        />
                    </div>                    

                </form>

                <Link
                    data-cy="new-account"
                    to={'/create-account'}
                    className="account-link"
                >
                    Create an Account
                </Link>
            </div>
            
        </div>        
    )
}

export default Login
