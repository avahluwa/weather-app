import React, {useState} from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import Title from './Title/Title';
import Weather from './Weather/Weather';
import { useInput } from './Hooks/useInput';

function App() {
  const inputProps = useInput("Redmond");
  // const [location, setLocation] = useState("Redmond");

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
            // value={location}
            // onChange={e => setLocation(e.target.value)}
          />
          <button type="submit" value="Submit" />
        </form>
      <Weather location={inputProps.value} />
    </div>
  );
}

export default App;
