import React from 'react';
import './bootstrap.styles.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/User";
import axios from 'axios'

class App extends React.Component{

    state = {
        users: [],
        isLoaded: false
    }

    async componentDidMount() {

        this.setState({isLoaded: true});
       const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

       this.setState({users: response.data, isLoaded: false})
    }

    render(){
        return (
            <div>
                <nav className="navbar bg-dark">
                    <Navbar />
                </nav>
                <div className='container'>
                    <Users users={this.state.users} isLoaded={this.state.isLoaded}/>
                </div>
            </div>

        );
    }

}

export default App;
