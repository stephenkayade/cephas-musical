import React from 'react'

export default function Nav() {
    const Navlist = [
        {
            Link: '/home',
            title: 'Home',
            image: 'friends'
        },
        {
            Link: '/about',
            title: 'about',
            image: 'friends'
        },
        {
            Link: '/contact',
            title: 'contact',
            image: 'friends'
        },
        {
            Link: '/services',
            title: 'services',
            image: 'friends'
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
