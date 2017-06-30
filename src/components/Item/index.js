import React from 'react'
import PropTypes from 'prop-types';

const Item = ({description, className, onClick}) => {
	let attributes = {
		onClick
	};

	if (className) {
		attributes.className = className;
	}
	return <li {...attributes}>
		{description}
	</li>;
};

Item.propTypes = {
	description: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

Item.defaultProps = {
	className: null,
	onClick: function () {}
};

export default Item