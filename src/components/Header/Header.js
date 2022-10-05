import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/countries'>Countries</NavLink>
        </div>
    );
};

export default Header;