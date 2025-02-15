import { React, useState, useEffect } from 'react';

const Weather = () => {
  const key = '1d4a9c14635dec5aec826490a517209f';
  const [city, setCity] = useState('');
  const [info, setInfo] = useState(null);  // Default to null
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    if (city.trim() === '') return; // Prevent API call if city is empty

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setInfo(null);
      });
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.city.value.trim();

    if (input === '') {
      setError('Please enter a city name.');
      return;
    }

    setCity(input);
    e.target.city.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='city' placeholder='Please enter a city' type='text' />
        <input type='submit' />
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {info && (
        <p>
          {info ? `The temperature in ${info.name} is ${info.main.temp}°C with${' '}
          ${info.weather[0].description}` : 'Loading...'}.
        </p>
      )}
    </div>
  );
};

export default Weather;
