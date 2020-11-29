import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  return (
    <React.Fragment>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type='submit'>Submit button</button>
        </div>
      </form>
    </React.Fragment>
  )
};

export default UseRefBasics;
