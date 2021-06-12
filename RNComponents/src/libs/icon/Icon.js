import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import iconMapping from './mapping';
import { COLORS } from '../colors';
import { normalizeFontSize } from '../util';

const Icon = props => {
  const { name, size, color, style, ...remainingProps } = props;

  let glyph = iconMapping[name] || '';
  if (typeof glyph === 'number') {
    glyph = String.fromCharCode(glyph);
  }

  const textStyle = {
    fontSize: size || normalizeFontSize(24),
    color: color || COLORS.TEXT.DARK
  };

  return (
    <Text {...remainingProps} style={[styles.font, textStyle, style]}>
      {glyph}
    </Text>
  );
};

Icon.propTypes = {
  ...Text.prototype,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'icomoon'
  }
});

export default Icon;
