import React, { Component } from 'react';
import '../styles/Checklist.css';
import FormNewItem from '../components/FormNewItem';
import ListItems from '../components/ListItems';
import Item from '../model/Item'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            listItems: []
        };

        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCreateNewItem = this.onCreateNewItem.bind(this);
    }

    onDescriptionChange(newDescription) {
        this.setState({
            description: newDescription
        });
    }

    onCreateNewItem() {
        let newItem = new Item(this.state.description, false);

        this.setState((prevState, props)=>{
            return {
                listItems: prevState.listItems.concat(newItem)
            } 
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Checklist</h2>
                </div>

                <FormNewItem
                    description={this.state.description}
                    onDescriptionChange={this.onDescriptionChange}
                    onCreateNewItem={this.onCreateNewItem}
                />
                <ListItems items={this.listItems} />
            </div>
        );
    }
}

export default App;
