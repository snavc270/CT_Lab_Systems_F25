import './Nav.css'

export default function Nav() {
    return (
        <header className="site-header">
            <nav className="container nav">
                <span className="logo">My Logo</span>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}