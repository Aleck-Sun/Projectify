import React, { useState } from 'react';
import '../App.css';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    // Hamburger menu click handler
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Posts

    return (
        <div>
            <nav className='navbar'>
                {/* Logo */}
                <Link to='/' className='navbar-logo'>
                    <i className="fas fa-paper-plane"></i>Projectify
                </Link>
                {/* Mobile hamburger menu */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/* Page selection */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projectsPage' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/postPage' className='nav-links' onClick={closeMobileMenu}>
                            Post Your Project
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;