import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
import { useSelector } from 'react-redux';
import classes from './Forcast.module.css'

const WEEK_DAYS = [
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const Forcast = () => {
 
    const dayInWeek = new Date().getDay()
    const forcastDay = WEEK_DAYS.slice(dayInWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInWeek))

    const forcastData = useSelector(state => state.weatherState.weather[1])

    useEffect(()=>{

    },[])
   

    return (
       <>
            <Accordion allowZeroExpanded>
                <label className={classes.title}>Daily</label>
                    {forcastData && forcastData.list.splice(0,7).map( (item,idx) => { return(
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className={classes.dailyItem}>
                                        <img src={`icons/${item.weather[0].icon}.png`} className={classes.iconSmall} alt="weather" />
                                        <label className={classes.day}>{forcastDay[idx]}</label>
                                        <label className={classes.description}>{item.weather[0].description}</label>
                                        <label className={classes.minMax}>{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className={classes.dailyDetailsGrid}>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Pressure:</label>
                                            <label>{item.main.pressure}</label>
                                        </div>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Humidity:</label>
                                            <label>{item.main.humidity}</label>
                                        </div>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Clouds:</label>
                                            <label>{item.clouds.all}%</label>
                                        </div>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Wind speed:</label>
                                            <label>{item.wind.speed} m/s</label>
                                        </div>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Sea level:</label>
                                            <label>{item.main.sea_level}m</label>
                                        </div>
                                        <div className={classes.dailyDetailsGridItem}>
                                            <label>Feels like:</label>
                                            <label>{item.main.feels_like}°C</label>
                                        </div>
                                 </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                )})}    
            </Accordion>
       </>
    );
};

export default Forcast;