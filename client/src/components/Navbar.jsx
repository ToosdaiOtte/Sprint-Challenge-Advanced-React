import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };
    return(
        <nav className='navbar'>
            <h1>Players</h1>
            <div
                className='dark-mode_toggle'
                onClick={() => toggleMode()}
            >
                <div
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;