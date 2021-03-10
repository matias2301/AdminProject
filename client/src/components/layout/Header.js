import React, { useContext, useEffect } from 'react';
import authContext from '../../context/authentication/authContext';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const AuthContext = useContext(authContext);
    const { userLogged, getAuthenticatedUser, closeSession } = AuthContext;

    const history = useHistory();

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
                    data-cy="close-session"
                    className='btn btn-blank close-session'
                    onClick={() => {
                        closeSession();
                        history.push('/');
                    }}
                >
                    Close Session
                </button>
            </nav>
        </header>
    )
}

export default Header
