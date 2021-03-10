import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext';
import Alert from '../layout/Alert';

const CreateAccount = (props) => {

    const AlertContext = useContext(alertContext);
    const { alert, showAlert } = AlertContext;

    const AuthContext = useContext(authContext);
    const { message, auth, registerUser } = AuthContext;

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: ""
    });

    const { name, email, password, confirmPass } = user;

    useEffect(() => {
        if(auth) props.history.push('/projects');

        if(message) showAlert(message.msg, message.category);

        //eslint-disable-next-line
    }, [message, auth, props.history]);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmPass.trim() === ''
        ){
            showAlert('All fields are required', 'alert-error');
            return
        };

        if( password.length < 6 ){
            showAlert('Password must be at least 6 characters', 'alert-error');
            return
        };

        if( password !== confirmPass ){
            showAlert('Passwords does not match', 'alert-error');
            return
        };

        registerUser({
            name,
            email,
            password
        });
    }


    return (
        <div className="userForm">
            <Alert
                alert={alert}
            />

            <div className="formContainer shadowDark">
                <form
                    onSubmit={handleSubmit}
                    data-cy="form-create-account"
                >
                    <h1 data-cy="title">Create an Account</h1>

                    <div className="fieldForm">
                        <label htmlFor="name">Name</label>
                        <input
                            data-cy="name-input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">
                        <label htmlFor="email">Email</label>
                        <input
                            data-cy="email-input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">
                        <label htmlFor="password">Password</label>
                        <input
                            data-cy="password-input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input
                            data-cy="confirm-input"
                            type="password"
                            name="confirmPass"
                            id="confirmPass"
                            placeholder="Confirm your password"
                            value={confirmPass}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="fieldForm">                        
                        <input
                            data-cy="submit-account"
                            type="submit"
                            value="Create an Account"
                            className="btn btn-primary btn-block"
                        />
                    </div>

                </form>

                <Link
                    to={"/"}
                    className="account-link"
                    data-cy="goto-index"
                >
                    Go to Login
                </Link>
            </div>
            
        </div>
    )
}

export default CreateAccount
