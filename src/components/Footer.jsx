// Footer.jsx
// Footer displayed at the bottom of the portfolio website.

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">

            <p>
                © {currentYear} Ting-Yang Chou.
                Built with React.
            </p>

        </footer>
    );
}

export default Footer;