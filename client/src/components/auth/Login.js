import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext';

const Login = (props) => {

    const AlertContext = useContext(alertContext);
    const { alert, showAlert } = AlertContext;

    const AuthContext = useContext(authContext);
    const { message, auth, loginUser } = AuthContext;

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    useEffect(() => {        
        if(auth) props.history.push('/projects');

        if(message) showAlert(message.msg, message.category);

        //eslint-disable-next-line
    }, [message, auth, props.history]);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( email.trim() === '' ||
            password.trim() === ''            
        ){
            showAlert('All fields are required', 'alert-error');
            return
        };

        loginUser({ email, password });
    }

    return (
        <div className="userForm">
            { alert ? 
                <div
                    data-cy="alert"
                    className={`alert ${alert.category}`}
                >
                    {alert.msg}
                </div>
            :
                null
            }
            
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
