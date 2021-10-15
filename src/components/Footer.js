import React from 'react'
import Pdf from '../assets/resume/CandiceWu_resume.pdf';

function Footer() {
    return (
        <section className="footer">
            <h1>let's connect IRL.</h1>
            <nav>
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
            </nav>
        </section>
    )
}

export default Footer;