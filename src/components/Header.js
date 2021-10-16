import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="header container">
            <div className="row">
                <div className="heading col-6">
                    <h1>hi there, i'm candice.</h1>
                </div>
                <div>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}


export default Header;