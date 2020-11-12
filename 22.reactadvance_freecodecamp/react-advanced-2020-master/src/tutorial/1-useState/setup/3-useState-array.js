import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
  <React.Fragment>
    {people.map((person) => {
      const {id,name} = person
      return <div key={id} className="item">
        {/* Render a list need a key props and unique value*/}
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    })}
    <button className="btn" onClick={() => setPeople([])}>Cleat items</button>
  </React.Fragment>
  ) 
};

export default UseStateArray;
