import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from './colors';

const Divider = props => {
  const { style, dark } = props;

  const dividerStyle = [];
  if (dark) {
    dividerStyle.push(styles.dark);
  } else {
    dividerStyle.push(styles.light);
  }

  return <View style={[styles.container, dividerStyle, style]} />;
};

Divider.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  dark: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    height: 1
  },
  light: {
    backgroundColor: COLORS.DIVIDER.LIGHT
  },
  dark: {
    backgroundColor: COLORS.DIVIDER.DARK
  }
});

export default Divider;
