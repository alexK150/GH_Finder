import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
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
    const getUser = async username => {
        setLoading();

        const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        dispatch({
            type:GET_USER,
            payload: response.data.item
        })

    }

    //Get repos
    const getUsersRepos = async username => {
        setLoading();

        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        dispatch({
            type:GET_REPOS,
            payload: response.data
        })

    }

    //Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    //set loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            isLoaded: state.isLoaded,
            searchUsers,
            clearUsers,
            getUser,
            getUsersRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState