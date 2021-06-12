import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from './colors';
import { normalizeFontSize } from './util';

const Text = props => {
  const { style, bold, light, dark, small, children, ...remainingProps } =
    props;

  const textStyles = [styles.style];

  if (bold) {
    textStyles.push(styles.latoBold);
  } else {
    textStyles.push(styles.latoRegular);
  }

  if (dark) {
    textStyles.push(styles.dark);
  } else if (light) {
    textStyles.push(styles.light);
  } else {
    textStyles.push(styles.regular);
  }

  if (small) {
    textStyles.push(styles.fontSize12);
  } else {
    textStyles.push(styles.fontSize14);
  }

  return (
    <RNText style={[...textStyles, style]} {...remainingProps}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  ...RNText.propTypes,
  bold: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  small: PropTypes.bool
};

Text.defaultProps = {
  small: false
};

const styles = StyleSheet.create({
  latoBold: {
    fontFamily: 'Lato-Bold'
  },
  latoRegular: {
    fontFamily: 'Lato-Regular'
  },
  light: {
    color: COLORS.TEXT.LIGHT
  },
  dark: {
    color: COLORS.TEXT.DARK
  },
  regular: {
    color: COLORS.TEXT.MEDIUM
  },
  fontSize14: {
    fontSize: normalizeFontSize(14)
  },
  fontSize12: {
    fontSize: normalizeFontSize(12)
  },
  style: {
    lineHeight: 22
  }
});

export default Text;
