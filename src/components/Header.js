import React from 'react';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
// import About from '../components/About';
// import Portfolio from '../components/Portfolio';
// import Contact from '../components/Contact';

const styles = {
    header: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    h1: {
        fontSize: '68px',
        padding: '40px',
        margin: '40px',
    }
};

function Header() {
    return (
        <header style={styles.header}>
            <div>
                <h1 style={styles.h1}>hi there, i'm candice.</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}


export default Header;