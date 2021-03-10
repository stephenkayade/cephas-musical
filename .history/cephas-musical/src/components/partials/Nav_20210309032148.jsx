import React from 'react'

export default function Nav() {
    const Navlist = [
        {
            Link: '/home',
            title: 'Home'
           
        },
        {
            Link: '/about',
            title: 'About'
           
        },
        {
            Link: '/contact',
            title: 'Contact'
           
        },
        {
            Link: '/services',
            title: 'Services'
           
        }
        {
            Link: '/songs',
            title: 'songs'
           
        }
    ]
    return (
        <>
            <div className="container-fluid bg-dark p-3">
                <div className="container d-flex justify-content-between">
                    <ul className="d-flex">

                    </ul>
                </div>
            </div>
        </>
    )
}
