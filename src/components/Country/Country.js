import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css'

const Country = ({ country }) => {
    const { name } = country;

    const navigate = useNavigate();
    const handleCountry = () => {
        navigate(`/countries/${name.common}`)
    }

    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <button onClick={handleCountry}>Country Details</button>
        </div>
    );
};

export default Country;