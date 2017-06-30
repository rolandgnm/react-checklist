import React from 'react';
import ListItem from './index';
import renderer from 'react-test-renderer';

describe('<ListItem />', () => {

	it('should render a list', () => {
		const tree = renderer.create(
			<ListItem items={[{description: 'my first item'}]}/>
		).toJSON();

		expect(tree).toMatchSnapshot();

	});

});