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
            Link: '/cont',
            title: 'cont',
            image: 'friends'
        },
        {
            Link: '/home',
            title: 'Home',
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