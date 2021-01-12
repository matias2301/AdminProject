import React, { useContext } from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

    const ProjectContext = useContext(projectContext);
    const { updateProject } = ProjectContext;

    const TaskContext = useContext(taskContext);
    const { getTasksByProject } = TaskContext;

    const selectProject = id => {
        updateProject(id);
        getTasksByProject(id);
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    )
}

export default Project
