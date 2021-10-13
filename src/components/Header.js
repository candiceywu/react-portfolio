import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import About from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

//format for creating a link between pages in React Router (using Component)
class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <section className="header">
                    <h1>hi there, i'm candice.</h1>
                    <nav>
                        <ul>
                            <li>
                                <Route exact path="/about" component={About} />
                            </li>
                            <li>
                                <Route exact path="/portfolio" component={Portfolio} />
                            </li>
                            <li>
                                <Route exact path="/contact" component={Contact} />
                            </li>
                        </ul>
                    </nav>
                </section>
            </HashRouter>
        )
    }
}

export default Header;