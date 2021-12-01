import React, { useState } from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import LocationInput from './LocationInput/LocationInput';
import Title from './Title/Title';
import Weather from './Weather/Weather';

function App() {
  const [location, setLocation] = useState("Seattle");

  const passLocation = (locationData) => {
      setLocation(locationData);
  }

  return (
    <div className={styles.App}>
      <Background />
      <Title />
      <LocationInput passLocation={passLocation} />
      <Weather location={location} />
    </div>
  );
}

export default App;
