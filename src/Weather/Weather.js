import React, {Component} from 'react';
//import styles from './Weather.module.css';
import WeatherDetail from './WeatherDetail';
import Error from './Error';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            error: false,
        }
    }
    
    async componentDidMount() {
        const url = "https://api.weatherapi.com/v1/current.json?key=6056506e536e4ef7ab2193723212511&q=Seattle&aqi=no";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({weather: data})
        console.log(data);
        console.log(data.location.name);
    }

    renderItems() {
        if(!this.state.error) {
            return ( 
                <WeatherDetail item={this.state.weather} />
            ); 
        } else {
            return <Error />
        }
        
    }
    
    
    render() {
        return (
          <div>
              {this.renderItems()} 
          </div>
        );
      }
}

export default Weather;

