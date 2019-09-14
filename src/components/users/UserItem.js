import React, {Component} from 'react';

class UserItem extends Component {

    // state ={
    //     id: 'id',
    //     login: 'mojo',
    //     avatarUrl: 'https://avatars1.githubusercontent.com/u/5550850?s=400&v=4',
    //     htmlUrl: 'https://github.com/bradtraversy'
    // }

    render() {
        const {login, avatarUrl, htmlUrl} = this.props.user;
        return (
            <div className='card text-center'>
                <img
                    src={avatarUrl}
                    alt=""
                    className='round-img'
                    style={{width: '60px'}}
                />
                <h3>{login}</h3>
                <div>
                    <a href={htmlUrl} className='btn btn-dark btn-sm my-1'>More
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;