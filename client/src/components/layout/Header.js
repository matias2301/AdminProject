import React, { useContext, useEffect } from 'react';
import authContext from '../../context/authentication/authContext';

const Header = () => {

    const AuthContext = useContext(authContext);
    const { userLogged, getAuthenticatedUser, closeSession } = AuthContext;

    useEffect(() => {
        getAuthenticatedUser();

        //eslint-disable-next-line
    }, []);

    return (
        <header className="app-header">
            {
                userLogged
                ?
                    <p className="userName">Hi! <span>{ userLogged.name }</span></p>
                :
                    null
            }            

            <nav className="mainNav">
                <button
                    className='btn btn-blank close-session'
                    onClick={() => closeSession()}
                >
                    Close Session
                </button>
            </nav>
        </header>
    )
}

export default Header
