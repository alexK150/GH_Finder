import React from 'react';
import './bootstrap.styles.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/User";
import axios from 'axios'
import Search from "./components/users/Search";

class App extends React.Component{

    state = {
        users: [],
        isLoaded: false
    }

    // async componentDidMount() {
    //
    //     this.setState({isLoaded: true});
    //    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);
    //
    //    this.setState({users: response.data, isLoaded: false})
    // }

// search GH Users
    searchUsers = async text=>{
this.setState({isLoaded: true});


        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`);

        this.setState({users: response.data.items, isLoaded: false})
    }

    //Clear users from state
    clearUsers =()=>{
        this.setState({users: [], isLoading: false})
    }


    render(){
        const{users, isLoaded}=this.state;
        return (
            <div>
                <nav className="navbar bg-dark">
                    <Navbar />
                </nav>
                <div className='container'>
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true:false}
                    />
                    <Users users={users} isLoaded={isLoaded}/>
                </div>
            </div>

        );
    }

}

export default App;
