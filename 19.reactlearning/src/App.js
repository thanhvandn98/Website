// import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v5 as uuid} from "uuid";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Axios from 'axios';

class App extends Component
{
  state = 
  {
    todos: [
      // {
      //   id: uuid.v6(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v6(),
      //   title: 'Dinner',
      //   completed: false
      // },
      // {
      //   id: uuid.v6(),
      //   title: 'Meeting',
      //   completed: false
      // }
    ]
  }
  componentDidMount()
  {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => this.setState({todos: res.data}))
  }
  //*Toggle complete
  markComplete = (id) =>
    {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo;
      })});
    }
    //*Delete Todo
    delTodo = (id) => 
    {
      Axios.delete(`https://jsonplaceholder.typicode.com/todos?_limit=20/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
      
    }
    //*Add Todo
    addTodo = (title) =>
    {
      Axios.post('https://jsonplaceholder.typicode.com/todos?_limit=20',
      {
        title,
        complete: false
      })
      // const newTodo = 
      // {
      //   id: uuid.v6(),
      //   title,
      //   complete: false
      // }
      .then(res => this.setState({todos: [...this.state.todos, res.data]})
      )
    }
  render()
  {
    return (
      <Route>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=> (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Route>
        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */
    );
  }
}

export default App;
