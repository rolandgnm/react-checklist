import React, { Component } from 'react'

class Tick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }


    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ 
            date: new Date() 
        }) 
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Tick