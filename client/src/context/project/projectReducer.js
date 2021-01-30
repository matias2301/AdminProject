import {
    SHOW_NEW_PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    ERROR_PROJECT,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types';

const projectReducer = (state, action) => {
    switch(action.type) {
        case SHOW_NEW_PROJECT_FORM:
            return {
                ...state,
                newProject: !state.newProject
            }

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        case ADD_PROJECTS:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                newProject: false,
                errorsForm: false
            }
        
        case ERROR_PROJECT:
            return {
                ...state,
                errorsForm: true
            }
    
        case PROJECT_ERROR:
            return {
                ...state,
                msg_error: action.payload
            }

        case ACTUAL_PROJECT:
            return {
                ...state,
                actualProject: state.projects.filter( project => project._id === action.payload )
            }

        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter( project => project._id !== action.payload ),
                actualProject: null,
            }

        default:
            return state
    }
}

export default projectReducer;