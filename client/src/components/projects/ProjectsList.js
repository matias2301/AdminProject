import React, { useEffect, useContext } from 'react'
import Project from './Project';
import projectContext from '../../context/project/projectContext';
import alertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectsList = () => {

    const ProjectContext = useContext(projectContext);
    const { msg_error, projects, getProjects } = ProjectContext;

    const AlertContext = useContext(alertContext);
    const { alert, showAlert } = AlertContext;

    useEffect(() => {
        if(msg_error) showAlert(msg_error.msg, msg_error.category);

        getProjects();

        //eslint-disable-next-line
    }, [msg_error]);

    if(projects.length === 0) return <p>Create a new Project</p>;

    return (
        <ul data-cy="project-list" className="projectsList">

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

            <TransitionGroup>
                {projects.map( project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="project"
                    >
                    <Project                        
                        key={project._id}
                        project={project}
                    />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectsList