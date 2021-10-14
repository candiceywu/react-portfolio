import React from 'react';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
// import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Contact from '../components/Contact';

function Header() {
    return (
        <header className="header">
            <div>
                <h1>hi there, i'm candice.</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}


export default Header;