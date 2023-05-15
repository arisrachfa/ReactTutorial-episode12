import { useState } from 'react'

export const useCounter = (initialval = 0) => {
    // state
    const [count, setCount] = useState(initialval);

    // function
    const increase = () => {
        setCount((prev) => prev + 1);
    }

    const decrease = () => {
        setCount((prev) => prev - 1);
    }
    const restart = () => {
        setCount(0);
    }

  return {count, increase, decrease, restart};
}
