import React from 'react';
import './bootstrap.styles.css';
import Navbar from "./components/layout/Navbar";

class App extends React.Component{
    render(){
        return (
            <nav className="navbar bg-dark">
                <Navbar />
            </nav>
        );
    }

}

export default App;
