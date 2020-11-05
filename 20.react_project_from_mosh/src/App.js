import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  }
  constructor()
  {
    super()
    console.log('App constructor')
  }
  componentDidMount()
  {
    //*Ajax call
    // this.setState({})
    console.log('App mounted')
  }
  handleIncrement = counter =>
  {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[0].value++
    this.setState({counters})
  }

  handleReset = () =>
  {
    const counters =this.state.counters.map(c => {
        c.value = 0
        return c
    })
    this.setState({counters})
  }
  handleDelete = counterId =>
  {
    // console.log('Event Handler Called',counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters})
  }
  render()
  {
    console.log('App rendered')
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>

    );
  }
}

export default App;
