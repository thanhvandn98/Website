import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)
  const checkSize = () => setSize(window.innerWidth) //trigger re-render
  useEffect(() => {
    window.addEventListener('resize',checkSize)
    return () => {
      console.log('clean')
      window.removeEventListener('resize',checkSize)
    }
  })
  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </React.Fragment>
  )
};

export default UseEffectCleanup;
