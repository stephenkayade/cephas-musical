import React from 'react';
import Navbox from './Navbox';

const Nav = () => {
    const Navlists = [
        {
            Link: '/',
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
                            Navlists.map((navdata) => 
                                <Navbox  
                                    title={navdata.title}
                                    Link={navdata.Link}
                                />
                            ) : <><div>populate with data</div></>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;
