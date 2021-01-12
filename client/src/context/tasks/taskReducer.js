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

const taskReducer = (state, action) => {
    
    switch (action.type) {
        
        case PROJECT_TASKS:
            return {
                ...state,
                tasksByProject: state.tasks.filter( task => task.projectId === action.payload )
            }

        case ADD_TASK:            
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                errorsTask: false
            }       

        case EDIT_TASK:
        case UPDATE_TASK:            
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? action.payload : task )
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== action.payload )
            }
        
        case ERROR_TASK:
            return {
                ...state,
                errorsTask: true
            }

        case ACTUAL_TASK:
            return {
                ...state,
                actualTask: action.payload
            }            
            
        case CLEAN_TASK:
            return {
                ...state,
                actualTask: null
            }
        default:
            return state;
    }

}

export default taskReducer;