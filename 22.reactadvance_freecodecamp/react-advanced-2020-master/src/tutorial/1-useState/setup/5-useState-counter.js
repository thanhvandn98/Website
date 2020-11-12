import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  const reset = () => setValue(0)
  const complexIncrease = () => setTimeout(() => {
    // setValue(value + 1) //In this case, no matter how many you clicked, this will increase 1 at time, meaning that "value" is looking for the old value
    setValue((prevState) => prevState + 1)
  },2000)//In this case, "value" is current value which prevState will save the current value every single time we click the button
  return (
    <React.Fragment>
      <h2>useState counter example</h2>
      <section style={{margin:'4rem 0'}}>
        <h2>Regular count</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      </section>
      <section style={{margin:'4rem 0'}}>
        <h2>Complex count</h2>
        <h1>{value}</h1>
        <button className="btn"onClick={complexIncrease}>Increase Later</button>
      </section>
    </React.Fragment>
  )
};

export default UseStateCounter;
