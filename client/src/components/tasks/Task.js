import React, { useContext } from 'react';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    const ProjectContext = useContext(projectContext);
    const { actualProject } = ProjectContext;

    const TaskContext = useContext(taskContext);
    const { getActualTask, updateTask, deleteTask } = TaskContext;

    const handleDelete = id => {
        deleteTask(id, actualProject[0]._id);        
    }

    const handleUpdate = task => {        
        task.state = !task.state;        
        updateTask(task);        
    }

    const handleEdit = task => {        
        getActualTask(task)
    }

    return (
        <li data-cy="task" className="task shadow">
            <p>{task.name} </p>

            <div className="state">
                { task.state
                    ? 
                        (
                            <button
                                data-cy="task-complete"
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
                                data-cy="task-incomplete"
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
                    data-cy="btn-edit"
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(task)}                    
                >
                    Edit
                </button>
                <button
                    data-cy="btn-delete"
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDelete(task._id)}
                >
                    Delete
                </button>
            </div>

        </li>
    )
}

export default Task
