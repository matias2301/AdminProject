import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    SHOW_NEW_PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    ERROR_PROJECT,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
} from '../../types';


const ProjectState = props => {

    const projects = [
        {id: 1, name: 'Tienda Virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Diseño web'}
    ];

    const initialState = {
        projects: [],
        newProject: false,
        errorsForm: false,
        actualProject: null,
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    // show form to add a new project
    const showForm = () => {
        dispatch({
            type: SHOW_NEW_PROJECT_FORM,
        });
    }

    // get projects from api
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects,
        });
    }

    // add a new project
    const addProject = project => {       
        
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECTS,
            payload: project
        });
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

    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        });
    }


    return (
        <ProjectContext.Provider
            value={{
                newProject: state.newProject,
                projects: state.projects,
                errorsForm: state.errorsForm,
                actualProject: state.actualProject,
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
