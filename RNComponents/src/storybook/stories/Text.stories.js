import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Text } from '../../libs';
import CenterView from './CenterView';

const Template = props => (
  <Text {...props}>I am Text. Don't forget to add fonts in your app.</Text>
);

const boldProps = {
  bold: true
};

const darkProps = {
  dark: true
};
const lightProps = {
  light: true
};

const smallProps = {
  small: true
};

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('regular', () => <Template />)
  .add('bold', () => <Template {...boldProps} />)
  .add('dark', () => <Template {...darkProps} />)
  .add('light', () => <Template {...lightProps} />)
  .add('small', () => <Template {...smallProps} />);
