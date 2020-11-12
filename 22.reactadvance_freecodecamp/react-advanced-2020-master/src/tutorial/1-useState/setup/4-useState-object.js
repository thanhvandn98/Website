import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'peter',
    age:24,
    message:'random message'
  })
  const [name,setName] = useState('Peter')
  const [age,setAge] = useState(22)
  const [message,setMessage] = useState('Ma Hong Phuc')
  const changeMessage = () => {
    // setPerson({...person,message:'hello'})
    setMessage('Yo')
  }
  return(
  <React.Fragment>
    <h2>useState object example</h2>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>Change message</button>
  </React.Fragment>)
};

export default UseStateObject;
