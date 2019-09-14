import React, {Component} from 'react';
import UserItem from './UserItem'

class User extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'hello',
                avatarUrl: 'https://avatars3.githubusercontent.com/u/8255800?s=400&v=4',
                htmlUrl: 'https://github.com/521xueweihan'
            },
            {
                id: '2',
                login: 'mojo',
                avatarUrl: 'https://avatars1.githubusercontent.com/u/5550850?s=400&v=4',
                htmlUrl: 'https://github.com/bradtraversy'
            },
            {
                id: '3',
                login: 'ccyy5201314',
                avatarUrl: 'https://avatars3.githubusercontent.com/u/48206412?s=400&v=4',
                htmlUrl: 'https://github.com/fzq5201314'
            }
        ]
    }


    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User;