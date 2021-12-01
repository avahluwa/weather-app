import React, { useState, useEffect } from "react";
import WeatherDetail from "./WeatherDetail";

export default function Weather({loc}) {

    const url = `https://api.weatherapi.com/v1/current.json?key=6056506e536e4ef7ab2193723212511&q=${loc}&aqi=no`;
   
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

