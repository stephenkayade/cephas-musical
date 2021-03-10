import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Navbox = ({Link, title})  {
    return (
        <>
        <div className="">

            <li><Link to={Link? Link : 'no where'}>{title? title: 'invalid'}</Link></li>
        </div>
        </>
    )
}
