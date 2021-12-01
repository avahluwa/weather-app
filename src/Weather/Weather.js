import React, { useState, useEffect } from "react";
import WeatherDetail from "./WeatherDetail";

export default function Weather({location}) {

    const url = `http://api.weatherapi.com/v1/forecast.json?key=df23371d552a4cc18a9165525212711&q=${location}&days=3&aqi=no&alerts=no`;
   
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData);
    }, [url]);

    if(data) {
        return (
            <div>
                <WeatherDetail item={data} />
            </div>
        );
    }
    return(
        <h1>Data could not be loaded.</h1>
    );
}

