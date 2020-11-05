import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (  
            console.log("Counters - render"),
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                    Reset   
                </button>
                {counters.map(counter => ( 
                        <Counter 
                            key={counter.id} 
                            onDelete={onDelete}
                            onIncrement={onIncrement} 
                            counter={counter}
                            //Counter object is carrying all data about counter
                        />
                    ))}
                    {/*  Value and selected is property of Props JS-object 
                        By default selected == true
                        "Key" is special attribute for uniquely identifying elements
                        "Key" attribute is used internally by react so won't be able to access it in counter component
                        so have to pass ID as a props and read it via this a props of ID
                        Value and id is properties of counter object
                    */}
            </div>
        );
    }
}

export default Counters;