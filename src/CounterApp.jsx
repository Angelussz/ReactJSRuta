
import React, { useState } from 'react'

export default function CounterApp({ value }) {
    const [counterApp, setCounterApp] = useState(value);
    const handleAdd = () => {
        setCounterApp(counterApp+1);
        // setCounterApp((c)=> c+1)
    }
    const handleSustract = () => {
        setCounterApp(counterApp-1);
        // setCounterApp((c)=> c+1)
    }
    const handleReset = () => {
        setCounterApp(value);
        // setCounterApp((c)=> c+1)
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counterApp}</h2>
            <button onClick={(e)=>{handleAdd()}} >+1</button>
            <button onClick={(e)=>{handleSustract()}} >-1</button>
            <button onClick={(e)=>{handleReset()}} >Reset</button>
        </>
    )
}
