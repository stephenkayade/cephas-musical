import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import image from '../assets/cephas-logo.png'

import Navbox from './Navbox';

const Nav = () => {
    const Navlists = [
        {
            title: 'Home',
            LinkUrl: '/',
        },
        {
            title: 'About',
            LinkUrl: '/about',
        },
        {
            title: 'Contact',
            LinkUrl: '/contact',
        },
        {
            title: 'Services',
            LinkUrl: '/services',
        },
        {
            title: 'Songs',
            LinkUrl: '/songs',
        },
    ];
    return (
        <>
            <div id className="container-fluid bg-secondary p-3">
                <div className="navbar container d-flex align-items-center justify-content-between">
                    <img src={image} alt="logo image" className="logo-img" />
                    <ul className="d-flex navbox">
                        {Navlists.length > 0 ? (
                            Navlists.map((link) => (
                                <Navbox title={link.title} LinkUrl={link.LinkUrl} />
                            ))
                        ) : (
                                <>
                                    <div>populate with data</div>
                                </>
                            )}
                    </ul>
                </div>
            </div>
            <section id="showcase" className="d-flex"
        </>
    );
};

export default Nav;
