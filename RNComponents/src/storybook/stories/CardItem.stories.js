import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { CardItem, Divider } from '../../libs';

const styles = StyleSheet.create({
  thumbnail: {
    width: 78,
    height: 54,
    borderRadius: 4,
    marginRight: 12
  },
  mr12: {
    margin: 12
  },
  mt12: {
    marginTop: 12
  }
});

const Template = props => {
  return (
    <CardItem
      title={'Casa Neumark'}
      onPress={() => {}}
      style={styles.mr12}
      {...props}
    />
  );
};

const subtitleProps = {
  subtitle: 'Entire Place',
  subtitleStyle: {
    textTransform: 'uppercase'
  }
};

const thumbnailComponentProps = {
  ...subtitleProps,
  ThumbnailComponent: (
    <Image
      source={{ uri: 'https://picsum.photos/id/237/200/300' }}
      style={styles.thumbnail}
    />
  )
};

const footerComponentProps = {
  ...thumbnailComponentProps,
  FooterComponent: <Divider style={styles.mt12} />
};

const elevatedProps = {
  ...footerComponentProps,
  elevation: 2
};

storiesOf('CardItem', module)
  .add('subtitle', () => <Template {...subtitleProps} />)
  .add('thumbnail', () => <Template {...thumbnailComponentProps} />)
  .add('footer', () => <Template {...footerComponentProps} />)
  .add('elevated', () => <Template {...elevatedProps} />);
