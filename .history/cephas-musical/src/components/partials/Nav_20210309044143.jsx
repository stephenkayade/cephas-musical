import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './'

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
      <div className="container-fluid bg-dark p-3">
        <div className="container d-flex justify-content-between">

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
    </>
  );
};

export default Nav;
