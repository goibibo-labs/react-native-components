import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { ListItem, Divider } from '../../libs';

const styles = StyleSheet.create({
  mr12: {
    margin: 12
  },
  mt12: {
    marginTop: 12
  }
});

const Template = props => {
  return (
    <ListItem
      title={'Guest Requirements'}
      onPress={() => {}}
      style={styles.mr12}
      {...props}
    />
  );
};

const subtitleProps = {
  subtitle: 'Government issues ID required',
  subtitleStyle: {
    //textTransform: 'uppercase'
  }
};

const footerComponentProps = {
  ...subtitleProps,
  FooterComponent: <Divider style={styles.mt12} />
};

storiesOf('ListItem', module)
  .add('title', () => <Template />)
  .add('subtitle', () => <Template {...subtitleProps} />)
  .add('footer', () => <Template {...footerComponentProps} />);
