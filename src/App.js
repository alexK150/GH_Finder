import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios'
import Search from "./components/users/Search";
import Alert from './components/layout/Alert'
import AboutInfo from "./components/pages/AboutInfo";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [isLoaded, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

// search GH Users


    //Get single Github user
    const getUser = async username => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        setUser(response.data.items);
        setLoading(false)

    }

    const getUsersRepos = async username => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        setRepos(response.data.items);
        setLoading(false)

    }

    const showAlert = (message, type) => {
        setAlert({message, type});

        setTimeout(() => setAlert(null), 3000)
    }

    //Clear users from state
    const clearUsers = () => {
        setUser([]);
        setLoading(false);
    }

    return (
        <GithubState>
            <Router>
                <div className='App'>
                    <nav>
                        <Navbar/>
                    </nav>
                    <div className='container'>
                        <Alert alert={alert}/>
                        <Switch>
                            <Route exact
                                   path='/'
                                   render={props =>
                                       (<>
                                           <Search
                                               clearUsers={clearUsers}
                                               showClear={users.length > 0}
                                               setAlert={showAlert}
                                           />
                                           <Users users={users} isLoaded={isLoaded}/>
                                       </>)
                                   }/>
                            <Route exact
                                   path='/about'
                                   component={AboutInfo}/>
                            <Route exact
                                   path='/user/:login'
                                   render={props => (
                                       <User {...props}
                                             getUser={getUser}
                                             getUsersRepos={getUsersRepos}
                                             user={user}
                                             repos={repos}
                                             isLoaded={isLoaded}

                                       />)}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
}

export default App;
