import React from 'react'
import Item from '../Item'

const ItemList = ({items}) => {
        if (!items instanceof Array)
            return false

        let listItems = items.map((item, index) => 
            <Item key={index} description={item.description}/>
        );

        return (
            <ul>
                 {listItems}
            </ul>
        )
    }

export default ItemList