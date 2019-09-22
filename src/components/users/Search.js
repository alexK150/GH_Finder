import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";

const Search=({setAlert})=> {

    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if (text === ''){
            setAlert('Please enter some text', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('')
        }
    }

    const onChange = (e)=>{
        setText(e.target.value)
    }

        return (
            <div>
                <form
                    onSubmit={onSubmit}
                    className='form' action="">
                    <input
                        type='text'
                        name='text'
                        placeholder='Search users...'
                        value={text}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>
                {/*if showClear==true show button*/}
                {githubContext.users.length > 0 && (<button
                    className='btn btn-light btn-block'
                    onClick={githubContext.clearUsers}>Clear
                </button>)}

            </div>
        );
    }

Search.propTypes = {
        setAlert: PropTypes.func.isRequired
    }

export default Search;