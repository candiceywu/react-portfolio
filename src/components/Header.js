import React from 'react';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
// import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Contact from '../components/Contact';

function Header() {
    return (
        <div>
            <header>
                <Navigation />
            </header>

            <section className="header">
                <h1>hi there, i'm candice.</h1>
                {/* <nav>
                    <ul>
                        <li>
                            <a href="#About">about.</a>
                        </li>
                        <li>
                            <a href="#Portfolio">portfolio.</a>
                        </li>
                        <li>
                            <a href="#Contact">contact.</a>
                        </li>
                    </ul>
                </nav> */}
            </section>
       </div>
    )
}


export default Header;