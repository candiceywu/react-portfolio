import React from 'react'
import Pdf from '../assets/resume/CandiceWu_resume.pdf';

function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="footer col-6">
                    <h1>learn more.</h1>
                </div>
                <div className="footer col-6">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/candicewu/" target="_blank" rel="noreferrer">linkedin.</a>
                        </li>
                        <li>
                            <a href="https://github.com/candiceywu" target="_blank" rel="noreferrer">github.</a>
                        </li>
                        <li>
                            <a href="mailto: candice.ying.wu@gmail.com" target="_blank" rel="noreferrer">email.</a>
                        </li>
                        <li>
                            <a href={Pdf} target="_blank" rel="noreferrer">resume.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;