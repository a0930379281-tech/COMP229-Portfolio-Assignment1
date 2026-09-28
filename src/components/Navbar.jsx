import { NavLink } from "react-router";

function Navbar() {
    return (
        <header className="site-header">
            <nav className="navbar">

                {/* Custom TYC AI Logo */}
                <NavLink to="/" className="logo">
                    <img
                        src="/images/tyc-logo.png"
                        alt="TYC AI Logo"
                        className="logo-image"
                    />
                </NavLink>

                {/* Main Navigation */}
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/about">
                        About Me
                    </NavLink>

                    <NavLink to="/projects">
                        Projects
                    </NavLink>

                    <NavLink to="/education">
                        Education
                    </NavLink>

                    <NavLink to="/services">
                        Services
                    </NavLink>

                    <NavLink to="/contact">
                        Contact Me
                    </NavLink>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;