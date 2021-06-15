import * as React from "react";
import * as ReactNative from "react-native";

export function normalizeFontSize(size: number): number;

type TextProps = ReactNative.TextProps & {
  bold?: boolean;
  dark?: boolean;
  light?: boolean;
  small?: boolean;
};
export const Text: React.FC<TextProps>;

type HeadingProps = TextProps & {
  type: 'h1' | 'h2' | 'h3' | 'h4'
};
export const Heading: React.FC<HeadingProps>;

export const NavigationHeader: React.FC<{
  title: string;
  subtitle?: string;
  leftIconType: 'menu' | 'back';
  RightComponent?: React.ElementType;
  divider?: boolean;
  onLeftIconPress: () => void;
  style?: Array<object> | object | number;
}>;

type IconProps = ReactNative.TextProps & {
  name: string;
  size?: number;
  color?: string;
}
export const Icon: React.FC<IconProps>;

type CardProps = {
  elevation?: number;
  style?: Array<object> | object | number;
};
export const Card: React.FC<CardProps>;

export function getShadowStyle(size: number): object;

type CardItemProps = CardProps & {
  title: string;
  titleStyle?: Array<object> | object | number;
  subtitle?: string;
  subtitleStyle?: Array<object> | object | number;
  ThumbnailComponent?: React.ReactElement;
  FooterComponent?: React.ReactElement;
  onPress: () => void
};
export const CardItem: React.FC<CardItemProps>;
