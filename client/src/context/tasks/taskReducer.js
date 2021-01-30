import {
    PROJECT_TASKS,
    ADD_TASK,    
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
                tasksByProject: action.payload
            }

        case ADD_TASK:            
            return {
                ...state,
                tasksByProject: [action.payload, ...state.tasksByProject],
                errorsTask: false
            }       
        
        case UPDATE_TASK:            
            return {
                ...state,
                tasksByProject: state.tasksByProject.map( task => task._id === action.payload.id ? action.payload : task )
            }

        case DELETE_TASK:
            return {
                ...state,
                tasksByProject: state.tasksByProject.filter( task => task._id !== action.payload )
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