import React from 'react';
import './bootstrap.styles.css';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/UserItem";

class App extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar bg-dark">
                    <Navbar />
                </nav>
                <div>
                    <UserItem/>
                </div>
            </div>

        );
    }

}

export default App;
