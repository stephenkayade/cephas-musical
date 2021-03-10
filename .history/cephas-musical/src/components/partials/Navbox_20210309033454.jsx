import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Navbox({Link, title}) {
    return (
        <>
            <li><Link to={Link? Link : 'no where'}>{title? }</Link></li>
        </>
    )
}
