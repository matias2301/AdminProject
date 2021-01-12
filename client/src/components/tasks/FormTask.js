import React, { useContext, useState, useEffect } from 'react'
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    const ProjectContext = useContext(projectContext);
    const { actualProject } = ProjectContext;

    const TaskContext = useContext(taskContext);
    const {
        actualTask,
        errorsTask,
        addTask,
        editTask,
        showErrorsTasks,
        getTasksByProject,
        cleanTask
    } = TaskContext;

    const [task, setTask] = useState({
        name: "",
        state: false
    });

    const { name } = task;

    useEffect(() => {        
        if( actualTask !== null ) setTask(actualTask)
    }, [actualTask])

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        });
    }

    if( !actualProject ) return null;

    const handleSubmit = e => {
        e.preventDefault();

        if( name.trim() === '' ){
            showErrorsTasks();
            return;
        }

        if( actualTask === null ) {
            
            task.projectId = actualProject[0].id;
            addTask(task);                            
        } else {            
            editTask(task);
            cleanTask();
        }

        getTasksByProject(actualProject[0].id);
        setTask({
            name: ''
        });

    }

    return (
        <div className="form">
            <form
                onSubmit={handleSubmit}
            >
                <div className="containerInput">
                    <input
                        type="text"
                        name="name"
                        placeholder="Task name..."
                        className="input-text"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="containerInput">
                    <input
                        type="submit"
                        value={ actualTask ? 'Edit task' : 'Add task'}
                        className="btn btn-primary btn-submit btn-block"
                    />
                </div>

            </form>

            { errorsTask ? <p className=" message error">Task name is required</p> : null }           
        </div>
    )
}

export default FormTask
