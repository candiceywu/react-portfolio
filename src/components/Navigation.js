import React from 'react';
import Pdf from '../assets/resume/CandiceWu_resume.pdf';

function Navigation() {
    return (
        <section className="navigation container">
            <div className="row">
                <div className="heading col-4">
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
                        <li>
                            <li>
                                <a href={Pdf} target="_blank" rel="noreferrer">resume.</a>
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navigation;