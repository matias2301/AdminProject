import React from 'react'
import Project from './Project';

const ProjectsList = () => {

    const projects = [
        {name: 'Tienda Virtual'},
        {name: 'Intranet'},
        {name: 'Diseño web'}
    ]

    return (
        <ul className="projectsList">
            {projects.map( project => (
                <Project
                    project={project}
                />
            ))}

        </ul>
    )
}

export default ProjectsList
