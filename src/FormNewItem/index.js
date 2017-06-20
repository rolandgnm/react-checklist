import React, { Component } from 'react'

class FormNewItem extends Component {
    constructor (props) {
        super(props);
        this.state = {description: ''};
        this.placeholder = "New item..."

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit(event) {
        // TODO: build Item and Lift state to App 
        event.preventDefault();
        
        if (this.state.description === '')
            return false;
        
        alert(`Zugo bala é um ${this.state.description}`);
    }
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.description} 
                    onChange={this.handleChange}
                    placeholder={this.placeholder}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = this.placeholder}
                />
                <input type="Submit" value={'+'}/>
            </form>
        )
    }
}



export default FormNewItem