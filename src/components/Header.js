import React from 'react';
import Navigation from './Navigation';


function Header() {
    return (
        <nav className="header container">
            <div className="row">
                <div className="header">
                    <h1>hi there, i'm candice.</h1>
                </div>
                <div className="navbar">
                    <Navigation />
                </div>
            </div>
        </nav>
    )
}

export default Header;