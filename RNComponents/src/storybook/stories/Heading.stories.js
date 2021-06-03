import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Heading } from '../../libs';
import CenterView from './CenterView';

const Template = props => (
  <Heading {...props}>I am Heading of type {props.type}</Heading>
);

const h1Props = {
  type: 'h1'
};

const h2Props = {
  type: 'h2'
};

const h3Props = {
  type: 'h3'
};

const h4Props = {
  type: 'h4'
};

storiesOf('Heading', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('h1', () => <Template {...h1Props} />)
  .add('h2', () => <Template {...h2Props} />)
  .add('h3', () => <Template {...h3Props} />)
  .add('h4', () => <Template {...h4Props} />);
