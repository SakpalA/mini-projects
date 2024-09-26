import React, { useEffect, useState } from 'react';
import './digi.css';

const DigiClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    },[])

    //convert clock in12 hour format
    const rawHours = time.getHours();
    const hours = (rawHours % 12 || 12).toString().padStart(2, '0');
    const period = rawHours >= 12 ? "PM" : "AM";
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const second = time.getSeconds().toString().padStart(2, '0');
    // padStart is used so hour, minute & hours have two digits

    return (
        <div>
            <h1>Digital Clock</h1>
            <h3>{time.toLocaleTimeString()}</h3>

            <h1>12 hours Clock</h1>
            <span className='time'>{hours}:</span>
            <span className='time'>{minutes}:</span>
            <span className='time'>{second} </span>
            <span className='time'>{period}</span>
        </div>
    )
}

export default DigiClock;