import React, {useEffect, useContext} from 'react';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User =({ match})=> {
    const  githubContext = useContext(GithubContext);
    const {getUser, isLoaded, user, repos, getUsersRepos} = githubContext;

    useEffect(()=>{
        getUser(match.params.login);
        getUsersRepos(match.params.login)
        //eslint-disable-next-line
    }, []);


        const {name, avatar_url, location, bio, company, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;


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
                        <h1>{login}</h1>
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


export default User;