import React, { Component } from 'react'
import Item from '../Item'
class ListItems extends Component {

    
    
    render () {
        const items = this.props.items;
        if (!items instanceof Array)
            return false

        let listItems = items.map((item, index) => 
            <Item key={index} item={item}/>
        );

        return (
            <ul>
                 {listItems}
            </ul>
        )
    }
}

export default ListItems