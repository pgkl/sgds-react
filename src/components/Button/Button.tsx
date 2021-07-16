import React from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  fixedWidth?: boolean;
  onClick?: () => void;
};

const primaryBgColor = '#0065bd';
const secondaryBgColor = 'transparent';
const primaryBgHover = '#00437e';
const secondaryBgHover = '#d9effc';
const primaryColor = '#ffffff';
const secondaryColor = primaryBgColor;
const secondaryColorHover = primaryBgHover;

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.secondary ? secondaryColor : primaryColor)};
  background-color: ${(props) => (props.secondary ? secondaryBgColor : primaryBgColor)};
  width: ${(props) => (props.fixedWidth ? '200px' : undefined)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  line-height: 24px;
  min-height: 56px;
  min-width: 56px;
  outline-width: 0;
  padding: 16px;
  position: relative;
  text-alin: center;
  text-decoration: none;
  transition: background-color 0.2s;
  outline: ${(props) => (props.secondary ? '2px solid currentColor' : 0)};
  outline-offset: ${(props) => (props.secondary ? '-2px' : 0)};
  &:hover {
      background-color: ${(props) => (props.secondary ? secondaryBgHover : primaryBgHover)};
      color: ${(props) => (props.secondary ? secondaryColorHover : undefined)};
  }
`;

export default Button;
