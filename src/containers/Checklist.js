import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Checklist.css';
import FormNewItem from '../components/FormNewItem';
import ItemList from '../components/ItemList';
import {addItem} from '../actions/ChecklistActions'
import {createSelector} from 'reselect';
import {getItemsWithName} from '../selectors/ItemsSelector';

class Checklist extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Checklist</h2>
                </div>

                <FormNewItem
                    listName='list1'
                    onCreateNewItem={this.props.onCreateNewItem}
                />
                <ItemList items={this.props.items} />


                <FormNewItem
                    listName='list2'
                    onCreateNewItem={this.props.onCreateNewItem}
                />
                <ItemList items={this.props.items2} />
            </div>
        );
    }
}


// Get list factory
let createGetItems = (name) => {
    return createSelector(
        (items) => items,
        (items) => {
            return getItemsWithName(items, name);
        }
    );
}

// Create a memoization selector
let getItems1 = createGetItems('list1');
let getItems2 = createGetItems('list2');

const mapStateToProps = (state, ownProps) => {
    return {
        items: getItems1(state.items),
        items2: getItems2(state.items),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        onCreateNewItem: (description, listName) => {
            dispatch(addItem(description, listName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
