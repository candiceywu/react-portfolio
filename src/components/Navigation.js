import React from 'react';
import Pdf from '../assets/resume/CandiceWu_resume.pdf';

const styles = {
    a: {
        textDecoration: 'none',
        color: 'rgb(225, 182, 52)',
    }
}

function Navigation() {
    return (
        <nav className="navigation container">
            <div className="row">
                <div className="nagivation col-6">
                    <ul>
                        <li>
                            <a style={styles.a} href="#About">about.</a>
                        </li>
                        <li>
                            <a style={styles.a} href="#Portfolio">portfolio.</a>
                        </li>
                        <li>
                            <a style={styles.a} href="#Contact">contact.</a>
                        </li>
                        <li>
                            <li>
                                <a style={styles.a} href={Pdf} target="_blank" rel="noreferrer">resume.</a>
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;