import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import Header from '../Header/Header';
import './SearchResult.css'

const SearchResult = () => {
    const [searchField, setSerachField] = useState("");
    const countries = useLoaderData();

    const filteredCountry = countries.filter(country => {
        return country.name.common.toLowerCase().includes(searchField.toLowerCase());
    })
    const handleChange = (e) => {
        setSerachField(e.target.value)
    } 

    return (
      <div>
        <Header handleChange={handleChange}></Header>
        <div className='search-result'>
          {filteredCountry.map((country) => (
            <Country country={country}></Country>
          ))}
        </div>
      </div>
    );
};

export default SearchResult;