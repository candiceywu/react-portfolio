import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


function Header() {
    return (
        <header className="header">
        <h1>hi there, i'm candice.</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about">about.</a>
                </li>
                <li>
                    <a href="#work">work.</a>
                </li>
                <li>
                    <a href="#contact">contact.</a>
                </li>
            </ul>
        </nav>
    </header>  
    )
}

export default Header;