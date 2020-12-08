import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer} from './reduce'
// reducer function
const defaultState = {
  people: [],
  isModalOpen:false,
  modalContent:'Empty'
}

const Index = () => {
  const [name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      const newItem = {id:new Date().getTime().toString(),name}
      dispatch({type: 'ADD_ITEM', payday: newItem})
    }
    else{
      dispatch({type: 'NO_VALUE'})
    }
  }
  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }
  return (<>
    {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent}/>)}
    <form action="" onSubmit={handleSubmit} className="form">
      <div className="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {state.people.map((person) => {
      return <div className="item" key={person.id}>
        <h4>{person.name}</h4>
        <button onClick={() => dispatch({type:'REMOVE_ITEM', payday:person.id})}>Remove</button>  
      </div>
    })}
  </>)
};

export default Index;
