import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TEXT_COLORS = {
  REGULAR: '#4a4a4a'
};

const Text = props => {
  const { style, bold, light, small, children, ...remainingProps } = props;

  const textStyles = [styles.style];

  if (bold) {
    textStyles.push(styles.latoBold);
  } else if (light) {
    textStyles.push(styles.latoLight);
  } else {
    textStyles.push(styles.latoRegular);
  }

  if (small) {
    textStyles.push(styles.fontSize12);
  } else {
    textStyles.push(styles.fontSize15);
  }

  return (
    <RNText style={[...textStyles, style]} {...remainingProps}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  ...RNText.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  bold: PropTypes.bool,
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
  latoLight: {
    fontFamily: 'Lato-Light'
  },
  fontSize15: {
    fontSize: 15
  },
  fontSize12: {
    fontSize: 12
  },
  style: {
    color: TEXT_COLORS.REGULAR,
    lineHeight: 22
  }
});

export default Text;
