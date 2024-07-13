import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const Detail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setCountry(response.data[0]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="country-detail">
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <p><strong>Borders:</strong> {country.borders?.join(', ') || 'None'}</p>
      <p><strong>Currency:</strong> {Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>
    </div>
  );
};

export default Detail;
