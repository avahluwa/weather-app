import React from 'react';
import styles from './WeatherDetail.module.css';

export default function WeatherDetail({item}) {
    return(
        <div className={styles.weather}>
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
            {item.forecast.forecastday.map( (item) => (
                <div>
                <h3>
                    {item.date}<br />
                    {/* <img src={item.current.condition.icon} alt={item.current.condition.text} className={styles.img} /> <br/>
                    {item.current.temp_f}&#176;F<br/> */}
                </h3>
                {/* <h4 className={styles.alt_text}>
                    Precipitation: {item.current.precip_in} in.<br/>
                    Humidity: {item.current.humidity}% <br/>
                    Wind: {item.current.wind_mph} mph
                </h4> */}
                </div>
            ))}
        </div>    
    );
}

