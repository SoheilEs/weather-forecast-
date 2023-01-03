import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../Redux/weather/weatherAction';
import classes from './Weather.module.css'

const Weather = ({data}) => {
    const lat = data.latitude
    const lon = data.longitude
    const weatherData = useSelector(state => state.weatherState)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchWeather(lat,lon))
    },[dispatch,lat,lon])
    
    return (
     <>
     {weatherData.loading && 
        <div className={classes.weather}>    
            <div className={classes.top}>
                <div>
                    <p className={classes.city}>{data.city}</p>
                    <p className={classes.weatherDescription}>{weatherData.weather[0].weather[0].description}</p>
                </div>
            <img className={classes.weatherIcon} alt='weather' src={`icons/${weatherData.weather[0].weather[0].icon}.png`}  />
            </div>
            <div className={classes.bottom}>
                <p className={classes.temprature}>{Math.round(weatherData.weather[0].main.temp)}°C</p>
                <div className={classes.details}>
                    <div className={classes.parameterRow}>
                        <span className={classes.parameterLabel}>Details</span>
                    </div>
                    <div className={classes.parameterRow}>
                        <span className={classes.parameterLabel}>Feels Like</span>
                        <span className={classes.parameterValue}>{Math.round(weatherData.weather[0].main.feels_like)}°C</span>
                    </div>
                    <div className={classes.parameterRow}>
                        <span className={classes.parameterLabel}>Wind</span>
                        <span className={classes.parameterValue}>{Math.round(weatherData.weather[0].wind.speed)}m/s</span>
                    </div>
                    <div className={classes.parameterRow}>
                        <span className={classes.parameterLabel}>Humidity</span>
                        <span className={classes.parameterValue}>{weatherData.weather[0].main.humidity}%</span>
                    </div>
                    <div className={classes.parameterRow}>
                        <span className={classes.parameterLabel}>Pressure</span>
                        <span className={classes.parameterValue}>{weatherData.weather[0].main.pressure}mb</span>
                    </div>
                </div>
            </div>
        </div>
     }
    </>
    );
};

export default Weather;