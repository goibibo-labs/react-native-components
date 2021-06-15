import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { NavigationHeader } from '../../libs';

const Template = props => {
  return (
    <NavigationHeader
      title={'Listings'}
      onLeftIconPress={() => {}}
      {...props}
    />
  );
};

const menuProps = {
  leftIconType: 'menu'
};

const backProps = {
  leftIconType: 'back'
};

const subtitleProps = {
  ...menuProps,
  subtitle: 'Darohar Villa'
};

storiesOf('NavigationHeader', module)
  .add('menu', () => <Template {...menuProps} />)
  .add('back', () => <Template {...backProps} />)
  .add('subtitle', () => <Template {...subtitleProps} />);
