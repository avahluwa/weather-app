import React from 'react';
import styles from './Title.module.css';

export default function Title({location}) {
  return (
    <div>
      {/* This is a image with continous rotation rotation */}
      
      
      <div className={styles.title}>
          <img src="./sun_rotate.png" alt="The_Sun" className={styles.img} />    
          Weather App        
      </div>
      
      
      <div className={styles.container}>
          Today's Forecast for {location}
          <div className={styles.flip}>
              <div><div>sunny</div></div>
              <div><div>cloudy</div></div>
              <div><div>rainfall</div></div>
          </div>
      </div>

    </div>
  );
}
