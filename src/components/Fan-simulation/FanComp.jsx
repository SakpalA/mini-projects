import React, { useReducer } from 'react'
import './fan.css'
import { reducer } from './reducer'


const Fan = () => {
    const initialState = {
        isOn : false,
        speed : 0,
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const setSpeed = (speed) => dispatch({type : 'SET_SPEED',  speed})
  return ( 
    <div className='fan-container'>
        <div className={`fan ${state.isOn ? 'on' : 'off'} speed-${state.speed}`}>
            <div className="blade"></div>
            <div className="blade"></div>
            <div className="blade"></div>
        </div>
        <div className="controls">
            <button onClick={()=>dispatch({type: 'TOGGLE_POWER'})}>{state.isOn ? "Turn Off" : "Turn On"}</button>

            {/* This creates an array of numbers from 0 to 4 and maps each to a button element, representing speed levels from 1 to 5. The setSpeed function is called with the appropriate speed when a button is clicked. */}
            {[...Array(5).keys()].map(i => (
                <button 
                key={i + 1}
                onClick={() => setSpeed(i + 1)}>Speed {i + 1}</button>
            ))}
        </div>
    </div>
  )
}

export default Fan;