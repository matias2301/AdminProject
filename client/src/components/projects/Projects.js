import React, { useContext, useEffect } from 'react';
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import TasksList from '../tasks/TasksList';
import authContext from '../../context/authentication/authContext';

const Projects = () => {

    const AuthContext = useContext(authContext);
    const { getAuthenticatedUser } = AuthContext;

    useEffect(() => {
        getAuthenticatedUser();

        //eslint-disable-next-line
    }, []);

    return (
        <div className="containerApp">
            
            <SideBar />

            <div className="mainSection">

                <Header />
                <main>

                    <FormTask />

                    <div className="containerTasks">
                        <TasksList />
                    </div>
                </main>
            </div>
            
        </div>
    )
}

export default Projects
