import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Item from '../Item/index';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


storiesOf('Item', module)
	.add('Basic List item', () => (
        <Item description="Description" />
	));