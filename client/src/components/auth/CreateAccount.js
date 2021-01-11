import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: ""
    });

    const { name, email, password, confirmPass } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <div className="userForm">
            <div className="formContainer shadowDark">
                <form
                    onSubmit={handleSubmit}
                >
                    <h1>Create an Account</h1>

                    <div className="fieldForm">
                        <label htmlFor="name">Name</label>
                        <input
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
                            type="submit"
                            value="Create an Account"
                            className="btn btn-primary btn-block"
                        />
                    </div>

                </form>

                <Link
                    to={"/"}
                    className="account-link"
                >
                    Go to Login
                </Link>
            </div>
            
        </div>
    )
}

export default CreateAccount
