import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import axiosClient from '../../config/axios';

import {
    PROJECT_TASKS,
    ADD_TASK,    
    UPDATE_TASK,
    DELETE_TASK,
    ERROR_TASK,
    ACTUAL_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props => {    

    const initialState = {        
        tasksByProject: [],
        errorsTask: false,
        actualTask: null
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);

    // get tasks
    const getTasksByProject = async projectId => {
        
        try {
            const response = await axiosClient.get('/api/task', { params: { projectId }});
            
            dispatch({
                type: PROJECT_TASKS,
                payload: response.data.tasks
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    // add a task to the selected project
    const addTask = async task => {
        
        try {
            const response = await axiosClient.post('/api/task', task);            
            dispatch({
                type: ADD_TASK,
                payload: response.data.task
            });
            getTasksByProject(task.projectId);
        } catch (error) {
            console.log(error);
        }
    }

    // update a task
    const updateTask = async task => {
        try {
            const response = await  axiosClient.put(`/api/task/${task._id}`, task);

            dispatch({
                type: UPDATE_TASK,
                payload: response.data.task
            });
            getTasksByProject(task.projectId);
        } catch (error) {
            console.log(error);
        }        
    }

    // delete a task to the selected project
    const deleteTask = async (id, projectId) => {

        try {
            const response = await axiosClient.delete(`/api/task/${id}`, { params: { projectId }})
            dispatch({
                type: DELETE_TASK,
                payload: response.data.msg
            });
            getTasksByProject(projectId);
        } catch (error) {
            console.log(error);
        }
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
                tasksByProject: state.tasksByProject,
                errorsTask: state.errorsTask,
                actualTask: state.actualTask,
                getTasksByProject,
                addTask,                
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