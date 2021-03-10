import React from 'react'
import Nav from '../partials/Nav'


const Home = () => {
    return(
        <>
            <Nav/>
            <div id="showcase " className=" animation-area">
                <div className="contain cephas text-white text-center">

                    <span data-text="cephas musical" className="cephas-name text-1">cephas musical</span>
                    <span data-text="cephas musical" className="cephas-name text-2">academy</span>
                </div>
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default Home;