import React from 'react';
import PropTypes from 'prop-types';

// don't do import { Text } from './index' to avoid require cycle
import Text from './Text';
import { normalizeFontSize } from './util';
import { COLORS } from './colors';

const HEADING_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4'
};

const Heading = props => {
  const { style, type, children, ...remainingProps } = props;

  const headingStyles = [
    {
      color: COLORS.TEXT.MEDIUM
    }
  ];
  const headingProps = {};

  switch (type) {
    case HEADING_TYPES.H1: {
      headingStyles.push({
        fontSize: normalizeFontSize(25),
        lineHeight: 37
      });
      break;
    }
    case HEADING_TYPES.H2: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: normalizeFontSize(21),
        lineHeight: 31
      });
      break;
    }
    case HEADING_TYPES.H3: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: normalizeFontSize(18),
        lineHeight: 21
      });
      break;
    }
    case HEADING_TYPES.H4: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: normalizeFontSize(17),
        lineHeight: 25
      });
      break;
    }
  }

  return (
    <Text
      style={[...headingStyles, style]}
      {...headingProps}
      {...remainingProps}
    >
      {children}
    </Text>
  );
};

Heading.propTypes = {
  ...Text.propTypes,
  type: PropTypes.oneOf(Object.values(HEADING_TYPES))
};

Heading.defaultProps = {
  type: 'h1'
};

export default Heading;
