function Footer() {
    return (
        <>
            <footer id="contact">
                <div className="section__container footer__container">
                    <h4>David Grigorian</h4>
                    <ul className="footer__socials">
                        <li>
                            <a href="https://www.linkedin.com/in/david-grigorian-6a77932aa/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:david.grigorian777@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/LogoMan1995" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__bar">
                    Copyright © {new Date().getFullYear()}. All rights reserved.
                </div>
            </footer>
        </>
    );
}

export default Footer;
