import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { GenericStyles } from './styles';
import { COLORS } from './colors';

import Icon from './icon/Icon';
import Heading from './Heading';
import Text from './Text';

const NavigationHeader = props => {
  const {
    title,
    subtitle,
    leftIconType,
    RightComponent,
    divider,
    onLeftIconPress,
    style
  } = props;

  return (
    <View style={style}>
      <View style={[styles.container, GenericStyles.row]}>
        <TouchableOpacity
          style={[GenericStyles.justifyContentCenter, GenericStyles.mr16]}
          onPress={onLeftIconPress}
        >
          <Icon name={leftIconType === 'menu' ? 'hamburger' : 'arrow-left'} />
        </TouchableOpacity>
        <View style={[GenericStyles.fill, GenericStyles.justifyContentCenter]}>
          <Heading type={'h3'} style={styles.title}>
            {title}
          </Heading>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        <View>{RightComponent}</View>
      </View>
      {divider ? <View style={styles.divider} /> : null}
    </View>
  );
};

NavigationHeader.defaultProps = {
  divider: true
};

NavigationHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  leftIconType: PropTypes.oneOf(['menu', 'back']).isRequired,
  RightComponent: PropTypes.element,
  divider: PropTypes.bool,
  onLeftIconPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: COLORS.BACKGROUND.WHITE,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 21
  },
  subtitle: {
    color: COLORS.TEXT.LIGHT
  },
  divider: {
    backgroundColor: COLORS.DIVIDER.DARK,
    height: 2
  }
});

export default NavigationHeader;
