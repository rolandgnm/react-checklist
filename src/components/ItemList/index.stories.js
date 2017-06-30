import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ItemList from '../ItemList';

storiesOf('Item List', module)
	.add('Basic unordered list', () => (
		<ItemList items={[{description: 'my description'}]} />
	))

	.add('Basic ordered list', () => (
		<ItemList items={[{description: 'my description'}]} listTag="ol" />
	));