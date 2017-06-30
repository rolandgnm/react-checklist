import React from 'react'
import Item from '../Item'
import PropTypes from 'prop-types';

const ItemList = ({items, listTag}) => {
	let listItems = items.map((item, index) =>
		<Item key={index} description={item.description}/>
	);

	let TypeOfList = listTag;

	return (
		<TypeOfList>
			{listItems}
		</TypeOfList>
	)
};

ItemList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
	})),

	listTag: PropTypes.oneOf(['ul', 'ol']),
};

ItemList.defaultProps = {
	items: [],
	listTag: 'ul',
};

export default ItemList