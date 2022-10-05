import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = ({handleChange}) => {
    return (
        <div className='header'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/countries'>Countries</NavLink>
            <NavLink to='/search'>
                <input onChange={handleChange} type="serach" placeholder='Search Country...'  />
            </NavLink>
        </div>
    );
};

export default Header;