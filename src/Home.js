import React from 'react'
import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import SearchBar from "./Search"
import './Home.css'
function Home() {
    return (
        <div className="Home">


            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to='about'>About</Link>
                    <Link to='store'>Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to='gmail'>Gmail</Link>
                    <Link to='images'>Images</Link>
                    <Apps />
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </div>
            <div className="home_imputContainer">
                <SearchBar />
            </div>
        </div>
    )
}

export default Home
