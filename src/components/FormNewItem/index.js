import React, { Component } from 'react'

class FormNewItem extends Component {
    constructor(props) {
        super(props);
        // this.state = {description: ''};
        this.placeholder = "New item..."

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        // this.setState({
        //     description: event.target.value
        // });

        // TODO: Lift state up:
        this.props.onDescriptionChange(event.target.value);
    }

    handleSubmit(event) {
        // TODO: Lift state to Checklist 
        event.preventDefault();

        if (this.props.description === '')
            return false;

        this.props.onCreateNewItem();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.props.description}
                    onChange={this.handleChange}
                    placeholder={this.placeholder}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = this.placeholder}
                />
                <input type="Submit" value={'+'} readOnly/>
            </form>
        )
    }
}



export default FormNewItem