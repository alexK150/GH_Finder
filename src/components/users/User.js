import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";

class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUsersRepos(this.props.match.params.login)
    }

    static propTypes = {
        isLoaded: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUsersRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired
    }

    render() {

        const {name, avatar_url, location, bio, company, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user;

        const {isLoaded, repos} = this.props;

        if (isLoaded) return <Spinner/>;

        return (
            <>
                {/*Button back to the main page*/}
                <Link to='/' className='btn btn-light'>
                    Back to Search
                </Link>
                Hireable: {''} {hireable ? <i className='fas fa-check text-success'/> :
                <i className='fas fa-times-circle text-danger'/>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url}
                             className='round-img'
                             alt=""
                             style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && (<>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>)}
                        <a href={html_url}
                           className='btn btn-dark my-1'>
                            Visit GitHub Profile
                        </a>
                        <ul>
                            <li>
                                {login && <>
                                    <strong>Username: </strong>{login}
                                </>}
                            </li>
                            <li>
                                {company && <>
                                    <strong>Company: </strong>{company}
                                </>}
                            </li>
                            <li>
                                {blog && <>
                                    <strong>Website: </strong>{blog}
                                </>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Repositories: {public_repos}</div>
                    <div className="badge badge-dark">Gists: {public_gists}</div>
                </div>

                <Repos repos={repos}/>
            </>
        );
    }
}

export default User;