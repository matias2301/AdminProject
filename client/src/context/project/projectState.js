import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import axiosClient from '../../config/axios';

import {
    SHOW_NEW_PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    ERROR_PROJECT,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types';


const ProjectState = props => {

    const initialState = {
        projects: [],
        newProject: false,
        errorsForm: false,
        actualProject: null,
        msg_error: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    // show form to add a new project
    const showForm = () => {
        dispatch({
            type: SHOW_NEW_PROJECT_FORM,
        });
    }

    // get projects from api
    const getProjects = async () => {

        try {

            const response = await axiosClient.get('/api/project');

            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects,
            });

        } catch (error) {

            const alert = {
                msg: 'An error has ocurred',
                category: 'alert'
            }

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }

    // add a new project
    const addProject = async project => {       
        
        try {
            const response = await axiosClient.post('/api/project', project);

            dispatch({
                type: ADD_PROJECTS,
                payload: response.data
            });
            
        } catch (error) {

            const alert = {
                msg: 'An error has ocurred',
                category: 'alert'
            }

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }

    // show errors
    const showErrorsForm = () => {
        dispatch({
            type: ERROR_PROJECT,
        });
    }

    // update project selected by the user
    const updateProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        });
    }

    const deleteProject = async projectId => {
        
        try {
            await axiosClient.delete(`/api/project/${projectId}`)
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });

        } catch (error) {

            const alert = {
                msg: 'An error has ocurred',
                category: 'alert'
            }

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }


    return (
        <ProjectContext.Provider
            value={{
                newProject: state.newProject,
                projects: state.projects,
                errorsForm: state.errorsForm,
                actualProject: state.actualProject,
                msg_error: state.msg_error,
                showForm,
                getProjects,
                addProject,
                showErrorsForm,
                updateProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
