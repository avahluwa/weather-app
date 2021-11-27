import React from 'react';
import styles from './Weather.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.weather}>
            <div>
                <h3>
                    Redmond<br />
                    <img src="./weather/64x64/day/113.png" alt="Sunny" className={styles.img} /> <br/>
                    46&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: 0% <br/>
                    Humidity: 5% <br/>
                    Wind: 3 mph
                </h4>
            </div>
            <div>
                <h3>
                    Washington D.C.<br />
                    <img src="./weather/64x64/day/356.png" alt="Sunny" className={styles.img} /> <br/>
                    30&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: 30% <br/>
                    Humidity: 29% <br/>
                    Wind: 12 mph
                </h4>
            </div>
            <div>
                <h3>
                    Chicago<br />
                    <img src="./weather/64x64/day/116.png" alt="Sunny" className={styles.img} /> <br/>
                    29&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: 0% <br/>
                    Humidity: 48% <br/>
                    Wind: 9 mph
                </h4>
            </div>
        </div>
            
      </div>
    );
  }
}
