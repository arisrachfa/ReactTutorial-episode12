import React from 'react'
import { useCounter } from '../CustomHook/useCounter'

const Counter = () => {
    // menggunakan hook custom dari useCounter
    const { count, increase, decrease, restart} = useCounter();

  return (

    <div className='App'>
        <h1>{count}</h1>
        <br/>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={restart}>restart</button>
    </div>
  )
}

export default Counter