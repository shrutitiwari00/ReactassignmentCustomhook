import React from 'react'
import useCustomCounter from './UseCustomCounter'
import './App.css'

const SecondComponent = () => {

    const counterTwo = useCustomCounter(2,"secondComponent") 
  return (
    <div className='counter-container'>
        <h2>This is my second component</h2>
        <button onClick={counterTwo}>Click</button>
    </div>
  )
}

export default SecondComponent