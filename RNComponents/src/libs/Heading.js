import React from 'react';
import PropTypes from 'prop-types';

// don't do import { Text } from './index' to avoid require cycle
import Text from './Text';

const HEADING_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4'
};

const HEADING_COLORS = {
  REGULAR: '#121212'
};

const Heading = props => {
  const { style, type, children, ...remainingProps } = props;

  const headingStyles = [
    {
      color: HEADING_COLORS.REGULAR
    }
  ];
  const headingProps = {};

  switch (type) {
    case HEADING_TYPES.H1: {
      headingStyles.push({
        fontSize: 25,
        lineHeight: 37
      });
      break;
    }
    case HEADING_TYPES.H2: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: 21,
        lineHeight: 31
      });
      break;
    }
    case HEADING_TYPES.H3: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: 18,
        lineHeight: 21
      });
      break;
    }
    case HEADING_TYPES.H4: {
      headingProps.bold = true;
      headingStyles.push({
        fontSize: 17,
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
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  type: PropTypes.oneOf(Object.values(HEADING_TYPES))
};

Heading.defaultProps = {
  type: 'h1'
};

export default Heading;
