import React, { useEffect, useContext } from 'react'
import Project from './Project';
import projectContext from '../../context/project/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectsList = () => {

    const ProjectContext = useContext(projectContext);
    const { projects, getProjects } = ProjectContext;

    useEffect(() => {
        getProjects();

        //eslint-disable-next-line
    }, []);

    if(projects.length === 0) return <p>Create a new Project</p>;

    return (
        <ul className="projectsList">
            <TransitionGroup>
                {projects.map( project => (
                    <CSSTransition
                        key={project.id}
                        timeout={200}
                        classNames="project"
                    >
                    <Project                        
                        project={project}
                    />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ProjectsList