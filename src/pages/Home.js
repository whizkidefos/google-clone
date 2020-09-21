import { Avatar } from '@material-ui/core';
import { AppsOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import '../css/Home.css';

function Home() {
    return (
        <div className="home">
            
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsOutlined />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="/images/google-logo.png" alt=""/>

                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;
