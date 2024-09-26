import React, { useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_VALUE':
            return {
                ...state,
                input: state.input + action.payload,
            };
        case 'DELETE_VALUE':
            return {
                ...state,
                input: state.input.slice(0,-1),
            };
        case 'CLEAR_VALUE':
            return {
                ...state,
                input: '', result: null,
            };
        case 'CALCULATE':
            const result = eval(state.input);
            return {
                ...state,
                input: result,
            };
        default:
            return state;
    }
}

const Calculator = () => {
    const initialState = {
        result: null,
        input: '',
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className='cal'>
                <input type="text"
                    placeholder='0'
                    className='inp'
                    value={state.input}
                    onChange={(value) => dispatch({ type: 'INPUT_VALUE', payload: value })} />
                <hr />
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '%' })} className='calcbtn'>%</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '/' })} className='calcbtn'>/</button>
                <button onClick={() => dispatch({ type: 'DELETE_VALUE' })} className='calcbtn'>AC</button>
                <button onClick={() => dispatch({ type: 'CLEAR_VALUE' })} className='calcbtn'>DE</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '1' })} className='calcbtn'>1</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '2' })} className='calcbtn'>2</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '3' })} className='calcbtn'>3</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '*' })} className='calcbtn'>x</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '4' })} className='calcbtn'>4</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '5' })} className='calcbtn'>5</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '6' })} className='calcbtn'>6</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '-' })} className='calcbtn'>-</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '7' })} className='calcbtn'>7</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '8' })} className='calcbtn'>8</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '9' })} className='calcbtn'>9</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '+' })} className='calcbtn'>+</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '.' })} className='calcbtn'>.</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '0' })} className='calcbtn'>0</button>
                <button onClick={() => dispatch({ type: 'INPUT_VALUE', payload: '00' })} className='calcbtn'>00</button>
                <button onClick={() => dispatch({ type: 'CALCULATE' })} className='calcbtn'>=</button>
            </div>
        </>
    )
}

export default Calculator;