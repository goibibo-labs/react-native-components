import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { GenericStyles } from './styles';
import { COLORS } from './colors';

import Text from './Text';
import Icon from './icon/Icon';
import { normalizeFontSize } from './util';

const ListItem = props => {
  const {
    style,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    onPress,
    FooterComponent
  } = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={GenericStyles.row} onPress={onPress}>
        <View style={GenericStyles.fill}>
          <Text bold style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
          {subtitle ? (
            <Text small style={subtitleStyle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View>
          <Icon name={'right'} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
      {FooterComponent}
    </View>
  );
};

ListItem.defaultProps = {
  FooterComponent: null
};

ListItem.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  subtitle: PropTypes.string,
  subtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  onPress: PropTypes.func.isRequired,
  FooterComponent: PropTypes.element
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: COLORS.BACKGROUND.WHITE
  },
  titleStyle: {
    fontSize: normalizeFontSize(15)
  },
  rightIcon: {
    color: COLORS.SECONDARY.DEFAULT
  }
});

export default ListItem;
