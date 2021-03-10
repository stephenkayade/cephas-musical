import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Navbox = ({LinkUrl, title}) => {
  return (
    <>
      <div className="">
        <li>
          <Link class to={Link ? LinkUrl : null}>{title ? title : 'invalid'}</Link>
        </li>
      </div>
    </>
  );
};

export default Navbox;
