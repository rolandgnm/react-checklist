import React, { Component } from 'react';
import '../styles/Checklist.css';
import FormNewItem from '../components/FormNewItem';
import ItemList from '../components/ItemList';
import Item from '../model/Item'

class Checklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            items: []
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

        this.setState((prevState, props) => {
            const newList = prevState.items.concat(newItem);
            return {
                description: '',
                items: newList
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
                <ItemList items={this.state.items} />
            </div>
        );
    }
}

export default Checklist;
