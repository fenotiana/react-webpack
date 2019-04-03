import React, { Component } from 'react';
import HelloWorldInput from './hello-world-input.component';

class HelloWorld extends Component {
    
    state = {
        value: '',
        label: 'I am an input: '
    }

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        const { value, label } = this.state;

        return (
            <div>
                Hello World!
            <HelloWorldInput value={value}  label={label} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default HelloWorld;