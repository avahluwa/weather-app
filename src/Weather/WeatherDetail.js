import React from 'react';
import styles from './WeatherDetail.module.css';

export default function WeatherDetail({item, item2, item3}) {
    return(
        <div className={styles.weather}>
            {/* First location */}
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
            {/* Second location */}
            <div>
                <h3>
                    {item2.location.name}<br />
                    <img src={item2.current.condition.icon} alt={item2.current.condition.text} className={styles.img} /> <br/>
                    {item2.current.temp_f}&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: {item2.current.precip_in} in.<br/>
                    Humidity: {item2.current.humidity}% <br/>
                    Wind: {item2.current.wind_mph} mph
                </h4>
            </div>
            {/* Third location */}
            <div>
                <h3>
                    {item3.location.name}<br />
                    <img src={item3.current.condition.icon} alt={item3.current.condition.text} className={styles.img} /> <br/>
                    {item3.current.temp_f}&#176;F<br/>
                </h3>
                <h4 className={styles.alt_text}>
                    Precipitation: {item3.current.precip_in} in.<br/>
                    Humidity: {item3.current.humidity}% <br/>
                    Wind: {item3.current.wind_mph} mph
                </h4>
            </div>
        </div>    
    );
}

