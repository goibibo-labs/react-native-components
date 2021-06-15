import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from './colors';
import { getShadowStyle } from './util';

const Card = props => {
  const { style, elevation, children } = props;

  const shadowStyle = getShadowStyle(elevation);

  return <View style={[styles.container, shadowStyle, style]}>{children}</View>;
};

Card.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  elevation: PropTypes.number,
  children: PropTypes.node
};

Card.defaultProps = {
  elevation: 0
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND.WHITE,
    padding: 12,
    borderRadius: 8
  }
});

export default Card;
