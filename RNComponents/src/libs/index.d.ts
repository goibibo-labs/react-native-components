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
