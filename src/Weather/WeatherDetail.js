import React from 'react';
import styles from './WeatherDetail.module.css';

const WeatherDetail = ({item}) => (
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
                    {item.location.name}<br />
                    <img src={item.current.condition.icon} alt={item.current.condition.text} className={styles.img} /> <br/>
                    {item.current.temp_f}&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: {item.current.precip_in} in.<br/>
                    Humidity: {item.current.humidity}% <br/>
                    Wind: {item.current.wind_mph} mph
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
    
)

export default WeatherDetail;