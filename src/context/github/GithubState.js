import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types'

const GithubState = props =>{
    const initialState ={
        users: [],
        user: {},
        repos: [],
        isLoaded: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search user

    //Get user

    //Get repos

    //Clear Users

    //set loading

    return<GithubContext.Provider
    value={{
    users: state.users,
        user: state.user,
        repos: state.repos,
        isLoaded: state.isLoaded
    }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState