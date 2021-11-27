import styles from './App.module.css';
import Background from './Background/Background';
import Title from './Title/Title';
import Weather from './Weather/Weather';

function App() {
  return (
    <div className={styles.App}>
      <Background />
      <Title />
      <Weather />
    </div>
  );
}

export default App;
