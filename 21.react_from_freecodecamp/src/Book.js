import React from 'react'

const Book = (props) =>
{ 
  //*attribute, eventHandler
  //*onClick, onMouseOver

    const {img, title, author} = props
    const clickHandler = () => alert('yo')
    const complexExample = (author) => console.log(author)  
    return (
        <article className='book' onMouseOver={() => {
        console.log(title)
        }}>
        <img src={img} alt=''/>
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Reference Example</button>
        <button type="button" onClick={() => complexExample(author)}>More Complex</button>
        </article>    
    )
}
export default Book 