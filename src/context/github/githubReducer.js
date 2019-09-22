import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types'

export default (state, action)=>{
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoaded: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoaded: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                isLoaded: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isLoaded: false
            }
        default:
            return state
    }
}