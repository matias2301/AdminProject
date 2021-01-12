import React from 'react';
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import TasksList from '../tasks/TasksList';

const Projects = () => {
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
