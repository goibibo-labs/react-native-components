import React from 'react';
import {TextProps} from "react-native";

export function normalizeFontSize(size: number): number;

export const Text: React.FC<{
  bold?: boolean;
  dark?: boolean;
  light?: boolean;
  small?: boolean;
} | TextProps>;

export const Heading: React.FC<{
  type: 'h1' | 'h2' | 'h3' | 'h4'
} | TextProps>;

export const NavigationHeader: React.FC<{
  title: string;
  subtitle?: string;
  leftIconType: 'menu' | 'back';
  RightComponent?: React.ElementType;
  divider?: boolean;
  onLeftIconPress: () => void;
  style?: Array<object> | object | number;
}>;

export const Icon: React.FC<{
  name: string;
  size?: number;
  color?: string;
} | TextProps>;

export const Card: React.FC<{
  elevation?: number;
  style?: Array<object> | object | number;
}>;

export function getShadowStyle(size: number): object;
