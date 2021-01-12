import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    PROJECT_TASKS,
    ADD_TASK,
    EDIT_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    ERROR_TASK,
    ACTUAL_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props =>{    

    const initialState = {
        tasks: [
            {id: 1, name: 'Elegir plataforma' , state: true, projectId: 1},
            {id: 2, name: 'Elegir colores' , state: false, projectId: 2},
            {id: 3, name: 'Elegir plataforma de pago' , state: false, projectId: 3},
            {id: 4, name: 'Elegir hosting' , state: true, projectId: 1}
        ],
        tasksByProject: null,
        errorsTask: false,
        actualTask: null
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);

    // get tasks
    const getTasksByProject = projectId => {
        
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        });
    }

    // add a task to the selected project
    const addTask = task => {      
        task.id = uuidv4();
        task.state = false;

        dispatch({
            type: ADD_TASK,
            payload: task
        });            
    }

    // edit a task
    const editTask = task => {        
        dispatch({
            type: EDIT_TASK,
            payload: task
        });
    }

    // update a task
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    }

    // delete a task to the selected project
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    }

    // show error message for tasks
    const showErrorsTasks = () => {
        dispatch({
            type: ERROR_TASK
        });
    }

    const getActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        });
    }

    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        });
    }


    return (
        <TaskContext.Provider
            value = {{
                tasks: state.tasks,
                tasksByProject: state.tasksByProject,
                errorsTask: state.errorsTask,
                actualTask: state.actualTask,
                getTasksByProject,
                addTask,
                editTask,
                updateTask,
                deleteTask,
                showErrorsTasks,
                getActualTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;