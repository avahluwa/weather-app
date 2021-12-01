import React from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import Title from './Title/Title';
import Weather from './Weather/Weather';
import { useInput } from './Hooks/useInput';

function App() {
  const inputProps = useInput("Redmond");

  return (
    <div className={styles.App}>
      <Background />
      <Title location={inputProps.value} />
        <form>
          <input
            name="Location"
            className={styles.locationTextBox} 
            {...inputProps}
            placeholder="Enter location here"
          />
          <button type="submit" value="Submit" />
        </form>
      <Weather location={inputProps.value} />
    </div>
  );
}

export default App;
