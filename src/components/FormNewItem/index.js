import React, { Component } from 'react'

class FormNewItem extends Component {

    constructor(props) {
        super(props)
        this.placeholder = 'New item...'
        this.state = {
            description: '',
            x: 0
        }

    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (this.state.description === '') return false
                    this.setState({
                        description: ''
                    })
                    this.props.onCreateNewItem(this.state.description, this.props.listName)
                }}>
                <input type="text"
                    value={this.state.description}
                    onChange={(e) => {
                        e.preventDefault()
                        this.setState({ description: e.target.value })
                    }}
                    placeholder={this.placeholder}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = this.placeholder}
                />
                < input type="Submit" value={'+'} readOnly />
            </form >)

    }
}

export default FormNewItem

