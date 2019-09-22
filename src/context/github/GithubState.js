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

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoaded: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search user
    const searchUsers = async text => {
        setLoading();

        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }
    //Get user

    //Get repos

    //Clear Users

    //set loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            isLoaded: state.isLoaded,
            searchUsers
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState