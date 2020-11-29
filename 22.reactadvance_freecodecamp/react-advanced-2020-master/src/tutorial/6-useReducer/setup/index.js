import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:'Empty'
}
const reducer = (state, action) => {
  console.log(state, action)
  if(action.type === 'TT'){
    return {...state,people:data,isModalOpen:true,modalContent:'item added'}
  }
  return state
  throw new Error('no match')
}
const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      dispatch({type: 'TT'})
    }
    else{
      
    }
  }
  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form action="" onSubmit={handleSubmit} className="form">
      <div className="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {state.people.map((person) => {
      return <div className="" key={person.id}>
        <h4>{person.name}</h4>  
      </div>
    })}
  </>;
};

export default Index;
