import React from 'react';
import './bootstrap.styles.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/User";

class App extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar bg-dark">
                    <Navbar />
                </nav>
                <div className='container'>
                    <Users/>
                </div>
            </div>

        );
    }

}

export default App;
