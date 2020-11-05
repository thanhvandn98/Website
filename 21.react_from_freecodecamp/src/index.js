import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._SX390_BO1,204,203,200_.jpg',
    title: 'Greenlights',
    author: 'Matthew McConaughey'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41agPRj7A2L._SX324_BO1,204,203,200_.jpg',
    title: 'Blackout: How Black America Can Make Its Second Escape from the Democrat Plantation',
    author: 'Candace Owens'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama'
  }
]
function BookList()
{
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} name={book}></Book>
        )
      })}
    </section>
  )
}
const Book = (props) =>
{   
  const {img, title, author} = props.name 
  return (
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>    
  )
} 
// const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._SX390_BO1,204,203,200_.jpg' alt=''/>
// const Title = () => <h1>Greenlights</h1>
// const Author = () => <h4 style={{color: '#617d98', fontsize: '0.75rem', marginTop: '0.25rem'}}>Matthew McConaughey</h4>

ReactDom.render(<BookList/>,document.getElementById('root'))