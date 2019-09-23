import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert'
import AboutInfo from "./components/pages/AboutInfo";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {


    //Clear users from state

    return (
        <GithubState>
            <AlertState>
            <Router>
                <div className='App'>
                    <nav>
                        <Navbar/>
                    </nav>
                    <div className='container'>
                        <Alert />
                        <Switch>
                            <Route exact
                                   path='/'
                                   render={props =>
                                       (<>
                                           <Search/>
                                           <Users />
                                       </>)
                                   }/>
                            <Route exact
                                   path='/about'
                                   component={AboutInfo}/>
                            <Route exact
                                   path='/user/:login'
                                   component={User}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
