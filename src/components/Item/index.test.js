import React from 'react';
import Item from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Item />', () => {

	it('should render a single item', () => {
		const tree = renderer.create(
			<Item description="my first item" />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render with a class name attribute', () => {
		const tree = renderer.create(
			<Item description="my first item" className="my-css-class" />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should call a callback when the list item is click', () => {
		const myFunction = jest.fn();
		const wrapper = shallow(<Item description="My Item" onClick={myFunction} />);
		wrapper.simulate('click');
		expect(myFunction.mock.calls.length).toBe(1);
	});
});