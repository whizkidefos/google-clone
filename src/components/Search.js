import { Button } from '@material-ui/core';
import { MicOutlined, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import '../css/Search.css';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        console.log('you just searched for: ', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

        // do something with input... come back and fix
        history.push('/search');
    }

    return (
        <form className="search">

            <div className="search__input">
                <SearchOutlined className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <MicOutlined className="search__micOutlined" />
            </div>

            { !hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Luck</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Luck</Button>
                </div>
            ) }
        </form>
    )
}

export default Search;
