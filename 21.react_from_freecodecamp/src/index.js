import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'

function BookList()
{
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}

// const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._SX390_BO1,204,203,200_.jpg' alt=''/>
// const Title = () => <h1>Greenlights</h1>
// const Author = () => <h4 style={{color: '#617d98', fontsize: '0.75rem', marginTop: '0.25rem'}}>Matthew McConaughey</h4>

ReactDom.render(<BookList/>,document.getElementById('root'))