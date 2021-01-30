import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTER_OK,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_OK,
    LOGIN_ERROR,
    CLOSE_SESSION
 } from '../../types';

 const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        userLogged: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registerUser = async user => {
        try {
            const response = await axiosClient.post('/api/users', user );
            dispatch({
                type: REGISTER_OK,
                payload: response.data
            });

            getAuthenticatedUser();

        } catch (error) {
            console.log(error);

            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
    }

    const getAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');        
        if(token){
            tokenAuth(token);
        }
        try {
            const response = await axiosClient.get('/api/auth');            
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
        } catch(error){
            dispatch({
                type: LOGIN_ERROR,
            });
        }
    }

    const loginUser = async data => {
        try {
            const response = await axiosClient.post('/api/auth', data);            

            dispatch({
                type: LOGIN_OK,
                payload: response.data
            });

            getAuthenticatedUser();

        } catch (error) {            
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    const closeSession = () => {
        dispatch({
            type: CLOSE_SESSION
        });
    }

    return(
        <AuthContext.Provider
            value = {{
                token: state.token,
                auth: state.auth,
                userLogged: state.userLogged,
                message: state.message,
                loading: state.loading,
                registerUser,
                getAuthenticatedUser,
                loginUser,
                closeSession
            }}
        >
            { props.children}
        </AuthContext.Provider>
    );

 }

 export default AuthState;