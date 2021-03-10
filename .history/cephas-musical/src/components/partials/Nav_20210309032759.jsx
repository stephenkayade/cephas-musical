import React from 'react'

export default function Nav() {
    const Navlists = [
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
           
        },
        {
            Link: '/songs',
            title: 'Songs'
           
        }
    ]
    return (
        <>
            <div className="container-fluid bg-dark p-3">
                <div className="container d-flex justify-content-between">
                    <ul className="d-flex">
                        {Navlists.length > 0 ? 
                            Navlists.map((navdata) => {
                                </Navbox  />
                            }) 
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
