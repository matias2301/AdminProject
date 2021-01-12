import React, { useContext } from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    const ProjectContext = useContext(projectContext);
    const { actualProject } = ProjectContext;

    const TaskContext = useContext(taskContext);
    const { getActualTask, updateTask, deleteTask, getTasksByProject } = TaskContext;

    const handleDelete = id => {
        deleteTask(id);
        getTasksByProject(actualProject[0].id);
    }

    const handleUpdate = task => {
        task.state = !task.state;        
        updateTask(task);        
    }

    const handleEdit = task => {        
        getActualTask(task)
    }

    return (
        <li className="task shadow">
            <p>{task.name} </p>

            <div className="state">
                { task.state
                    ? 
                        (
                            <button
                                type="button"
                                className="complete"
                                onClick={() => handleUpdate(task)}
                            >
                                Complete
                            </button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incomplete"
                                onClick={() => handleUpdate(task)}
                            >
                                Incomplete
                            </button>
                        )
                }
            </div>            
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(task)}                    
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDelete(task.id)}
                >
                    Delete
                </button>
            </div>

        </li>
    )
}

export default Task
