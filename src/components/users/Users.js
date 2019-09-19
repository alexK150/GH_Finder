import React from 'react';
import UserItem from './UserItem'
import Spinner from "../layout/Spinner.js";
import PropTypes from 'prop-types'

const Users=({users, isLoaded})=> {

    if (isLoaded){
       return <Spinner/>
    }else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;