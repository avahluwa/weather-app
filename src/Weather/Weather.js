import React, { useState, useEffect } from "react";
import WeatherDetail from "./WeatherDetail";

export default function Weather({loc, loc2, loc3}) {

    const url = `https://api.weatherapi.com/v1/current.json?key=6056506e536e4ef7ab2193723212511&q=${loc}&aqi=no`;
    const url2 = `https://api.weatherapi.com/v1/current.json?key=6056506e536e4ef7ab2193723212511&q=${loc2}&aqi=no`;
    const url3 = `https://api.weatherapi.com/v1/current.json?key=6056506e536e4ef7ab2193723212511&q=${loc3}&aqi=no`;

    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData);
    }, [url]);

    useEffect(() => {
        fetch(url2)
            .then((response2) => response2.json())
            .then(setData2);
    }, [url2]);
    
    useEffect(() => {
        fetch(url3)
            .then((response3) => response3.json())
            .then(setData3);
    }, [url3]);

    if(data) {
        return (
            <div>
                <WeatherDetail item={data} item2={data2} item3={data3} />
            </div>
        );
    }
    return(
        <h1>Data could not be loaded.</h1>
    );
}

