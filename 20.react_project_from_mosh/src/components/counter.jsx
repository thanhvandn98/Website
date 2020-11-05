import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };
    // renderTag()
    // {
    //     if(this.state.tags.length === 0) return <p>There are no tag</p>;
    //     return <ul>
    //     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}  
    //     </ul>
    // }
    /*handleIncrement = () =>
    {
        // this.state.count++;
        //*this value is increment but react is not aware that
        //*method inherit from Component
        //*this method will tell React that updated the state and then React will find out which one is updated and based on that it will bring the DOM in sync with the virtual DOM 

        this.setState({value: this.state.value + 1}); 
        //* obj.method();
        //* function();
    }*/
    render() {
        
        // console.log(this.props)
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2"></button>
        return (
        <div>
            {/* {this.state.tags.length === 0 && 'Please create new tag'}
            //*First statement is about Boolean 0 and 1
            {this.renderTag()} */}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">
                Increment
            </button>
            
            <button 
                onClick={this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">
                Delete
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount()
    {
        const{value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;

/*
    Each of components has their local state
    Counters component has an array of counters and each counter component has value
    
    Control component doesn't have its own local state it receives all the data via props and raises events whenever data needs to be changed
 */