import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/project/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TasksList = () => {

    const ProjectContext = useContext(projectContext);
    const { actualProject, deleteProject } = ProjectContext;

    const TaskContext = useContext(taskContext);
    const { tasksByProject } = TaskContext;


    if( !actualProject ) return <h2>Select a project</h2>;

    return (
        <Fragment>
            <h2>Project: { actualProject[0].name }</h2>

            <ul className="tasksList">
                { tasksByProject.length === 0 
                    ? 
                        <li className="task"><p>There is no tasks</p></li>
                    : 
                        <TransitionGroup>
                            {tasksByProject.map( task => (
                                <CSSTransition
                                    key={task.id}
                                    timeout={200}
                                    classNames="task"
                                >
                                    <Task                                        
                                        task={task}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>
            
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => deleteProject(actualProject[0].id)}
            >
                Delete Project
            </button>

        </Fragment>
    )
}

export default TasksList