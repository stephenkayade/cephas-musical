import React from 'react';
import Navbox from './Navbox';

const Nav = () => {
    const Navlists = [
        {
            title: 'Home',
            Link: '/'
           
        },
        {
            title: 'About',
            Link: '/about'
           
        },
        {
            title: 'Contact',
            Link: '/contact'
           
        },
        {
            title: 'Services',
            Link: '/services'
           
        },
        {
            title: 'Songs',
            Link: '/songs'
           
        }
    ]
    return (
        <>
            <div className="container-fluid bg-dark p-3">
                <div className="container d-flex justify-content-between">
                    <ul className="d-flex">

                        {Navlists.length > 0 ? 
                            Navlists.map(() => 
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
