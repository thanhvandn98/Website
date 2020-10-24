// import logo from './logo.svg';
// import './App.css';
import React, { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import Todos from './components/Todos';

class Todos extends Component
{
    
    render()
    {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
        // <div>
        //     {/* <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //         Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //     >
        //         Learn React
        //     </a>
        //     </header> */}
        //     {/* <Todos todos={this.state.todos} /> */}
        // </div>
    }
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
