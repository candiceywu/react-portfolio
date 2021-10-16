import React from 'react'
import Pdf from '../assets/resume/CandiceWu_resume.pdf';

const styles = {
    a: {
        textDecoration: 'none',
        color: 'rgb(225, 182, 52)',
    }
}

function Footer() {
    return (
        <footer className="footer container">
            <div className="row">
                <div className="footer col-6">
                    <h1>learn more.</h1>
                </div>
                <div className="footer col-6">
                    <ul>
                        <li>
                            <a style={styles.a} href="https://www.linkedin.com/in/candicewu/" target="_blank" rel="noreferrer">linkedin.</a>
                        </li>
                        <li>
                            <a style={styles.a} href="https://github.com/candiceywu" target="_blank" rel="noreferrer">github.</a>
                        </li>
                        <li>
                            <a style={styles.a} href="mailto: candice.ying.wu@gmail.com" target="_blank" rel="noreferrer">email.</a>
                        </li>
                        <li>
                            <a style={styles.a} href={Pdf} target="_blank" rel="noreferrer">resume.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;