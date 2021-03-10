import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Navbox from './Navbox';

const Nav = () => {
  const Navlists = [
    {
      title: 'Home',
      LinkU: '/',
    },
    {
      title: 'About',
      LinkU: '/about',
    },
    {
      title: 'Contact',
      LinkU: '/contact',
    },
    {
      title: 'Services',
      LinkU: '/services',
    },
    {
      title: 'Songs',
      LinkU: '/songs',
    },
  ];
  return (
    <>
      <div className="container-fluid bg-dark p-3">
        <div className="container d-flex justify-content-between">
          <ul className="d-flex">
            {Navlists.length > 0 ? (
              Navlists.map((link) => (
                <Navbox title={link.title} Link={link.Link} />
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
