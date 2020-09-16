import React, { useState } from 'react'
import {
    Mic,
    Search

} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import './Search.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function SearchBar({ hideButtons = false, searchpagecss }) {
    const [input, setInput] = useState('');
    const [{ }, dispatch] = useStateValue();
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log(input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')

    }
    return (
        <form class="search">
            <div className={`search_input ${searchpagecss && "searchPagecss_input"}`}>
                <Search className="search_inputIcon" />
                <input
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    type="text" />
                <Mic />
            </div>

            {
                !hideButtons ? (
                    <div className="search_buttons">
                        <Button
                            type="submit"
                            onClick={search}
                            variant="outlined"
                        >Google Search</Button>
                        <Button variant="outlined">Im feeling lucky</Button>
                    </div>
                ) : (
                        <div className="search_buttons">
                            <Button
                                className="search_buttonHidden"
                                type="submit"
                                onClick={search}
                                variant="outlined"
                            >Google Search</Button>
                            <Button
                                className="search_buttonHidden"
                                variant="outlined">Im feeling lucky</Button>
                        </div>
                    )
            }

        </form>
    )
}

export default SearchBar;
