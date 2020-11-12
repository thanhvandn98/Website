import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if(value >= 1)
    {
      document.title = `New messages(${value})`
    }
  }, [value])
  console.log('render component')
  return(
    <React.Fragment>
      <h1>{value}</h1>
      <h2>useEffect Basics</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>Click</button>
    </React.Fragment>
  )
};

export default UseEffectBasics;
