/**
 * 
Build a traffic light where the lights switch from green
to yellow to red after predetermined intervals and 
loop indefinitely.
 Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 5000ms
Green light: 3000ms
You are free to exercise your creativity to style the appearance of the traffic light.
 */
import React, { useState, useEffect } from 'react';
import './TrafficLight.css'; // Create a CSS file for styling

const lightConfig = {
    red:{
        next: 'yellow',
        duration: 2000
    },
    yellow:{
        next: 'green',
        duration: 2000
    },
    green:{
        next: 'red',
        duration: 2000 
    }
}


const TrafficLight = () => {
    const [light, setLight] = useState('red'); // default color

    useEffect(() => {
        setTimeout(() => {
            setLight(lightConfig[light].next);
        }, lightConfig[light].duration);
    },[light])
   return (
    <div className='traffic-light'>
        <div className={`light red ${light === 'red'  ? 'active' : ''}`}></div>
        <div className={`light yellow ${light === 'yellow'  ? 'active' : ''}`}></div>
        <div className={`light green ${light === 'green'  ? 'active' : ''}`}></div>
    </div>
   )
};

export default TrafficLight;
