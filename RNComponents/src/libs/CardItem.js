import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';
import { GenericStyles } from './styles';
import Icon from './icon/Icon';
import Heading from './Heading';
import Text from './Text';
import { COLORS } from './colors';

const CardItem = props => {
  const {
    style,
    elevation,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    ThumbnailComponent,
    onPress,
    FooterComponent
  } = props;

  return (
    <Card style={style} elevation={elevation}>
      <TouchableOpacity onPress={onPress} style={GenericStyles.row}>
        {ThumbnailComponent}
        <View style={GenericStyles.fill}>
          <Heading type={'h4'} dark style={titleStyle}>
            {title}
          </Heading>
          {subtitle ? (
            <Text light style={subtitleStyle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View style={GenericStyles.justifyContentCenter}>
          <Icon name={'right'} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
      {FooterComponent}
    </Card>
  );
};

CardItem.defaultProps = {
  ThumbnailComponent: null,
  FooterComponent: null
};

CardItem.propTypes = {
  ...Card.propTypes,
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
  ThumbnailComponent: PropTypes.element,
  FooterComponent: PropTypes.element
};

const styles = StyleSheet.create({
  rightIcon: {
    color: COLORS.SECONDARY.DEFAULT
  }
});

export default CardItem;
