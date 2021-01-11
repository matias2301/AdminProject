import React from 'react';
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';

const Projects = () => {
    return (
        <div className="containerApp">
            
            <SideBar />

            <div className="mainSection">

                <Header />
                <main>
                    <div className="containerTasks"></div>
                </main>
            </div>
            
        </div>
    )
}

export default Projects
