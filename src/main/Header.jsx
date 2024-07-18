import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
    const [navbarActive, setNavbarActive] = useState(false);
    const [headerClass, setHeaderClass] = useState('header');
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const showNavbar = () => {
        setNavbarActive(true);
    };

    const removeNavbar = () => {
        setNavbarActive(false);
    };

    const handleScroll = () => {
        if (window.scrollY >= 10) {
            setHeaderClass('header activeheader');
        } else {
            setHeaderClass('header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        if (location.pathname === path) return true;
        if (path === '/services' && location.pathname.includes('/services/servicedetails')) return true;
        if (path === '/' && location.pathname.includes('/home/details')) return true;
        if (path === '/' && location.pathname.includes('/condition')) return true;
        if (path === '/' && location.pathname.includes('/privacy')) return true;
        return false;
    };

    return (
        <div className='header-container'>
            <div className={headerClass}>
                <div className='upper-header'>
                    <div className='logo'>
                        <img src='/Images/logo.png' alt='header-Techfirma' aria-hidden='true' style={{ width: 50 }} />
                    </div>
                </div>

                <div className='main-header'>
                    <div className={`left ${navbarActive ? 'activeleft' : ''}`}>
                        <Link
                            to="/"
                            onClick={removeNavbar}
                            className={isActive('/') ? 'active' : ''}
                        >
                            Thuis
                        </Link>
                        <Link
                            to="/aboutus"
                            onClick={removeNavbar}
                            className={isActive('/aboutus') ? 'active' : ''}
                        >
                            Over ons
                        </Link>
                        <Link
                            to="/services"
                            onClick={removeNavbar}
                            className={isActive('/services') ? 'active' : ''}
                        >
                            Diensten
                        </Link>
                        <Link
                            to="/career"
                            onClick={removeNavbar}
                            className={isActive('/career') ? 'active' : ''}
                        >
                            Carrière
                        </Link>
                        <Link
                            to="/contactus"
                            onClick={removeNavbar}
                            className={isActive('/contactus') ? 'active' : ''}
                        >
                            Neem contact met ons op
                        </Link>
                    </div>
                    <div className={`closenavbar ${navbarActive ? 'visible' : 'hidden'}`} onClick={removeNavbar}>
                        <GrFormClose className='icon' />
                    </div>
                    <div className={`togglenavbar ${navbarActive ? 'hidden' : 'visible'}`} onClick={showNavbar}>
                        <HiMenu className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
