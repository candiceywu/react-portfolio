import React from 'react';
import Navigation from './Navigation';


function Header() {
    return (
        <nav className="header font-link">
            <div className="row">
                <div className="header col-6">
                    <h1>hi there, i'm candice.</h1>
                </div>
                <div className="navbar col-6">
                    <Navigation />
                </div>
            </div>
        </nav>
    )
}

export default Header;