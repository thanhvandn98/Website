import React, { useState } from 'react';

//useState - function
const UseStateBasics = () => {
  // console.log(useState('hello'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1] //*function control the value
  // console.log(value,handler)
  const [text,setText] = useState('random title')
  const handleClick = () =>
  {
    if(text === 'random title')
    {
      setText('Yeah')
    }
    else
    {
      setText('random title')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <h2>useState basic example</h2>
    <button className="btn" onClick={handleClick}>Change title</button>
  </React.Fragment>
};

export default UseStateBasics;
