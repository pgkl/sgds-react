import {css} from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';

const primaryBgColor = '#0065bd';
const primaryBgHover = '#00437e';
const primaryColor = '#ffffff';
const secondaryBgColor = 'transparent';
const secondaryColor = primaryBgColor;
const secondaryBgHover = '#d9effc';
const secondaryColorHover = primaryBgHover;


type ButtonType = 'primary' | 'secondary' | 'cancel' | 'disabled';


export interface ButtonProps {
  children: React.ReactNode;
  buttonType?: ButtonType;
  onClick?: () => void;
  fixedWidth?: boolean;
}

const primaryCss = css`
  background-color: ${primaryBgColor};
  color: ${primaryColor};
  &:hover {
    background-color: ${primaryBgHover}
  }
`;

const secondaryCss = css`
  background-color: ${secondaryBgColor};
  color: ${secondaryColor};
  outline: 2px solid currentColor;
  &:hover {
    background-color: ${secondaryBgHover};
    color: ${secondaryColorHover}
  }
`;

const cancelCss = css`
  background-color: ${secondaryBgColor};
  color: ${secondaryColor};
  outline: 2px solid currentColor;
  outline-offset: -2px;
  &:hover {
    background-color: ${secondaryBgHover};
    color: ${secondaryColorHover}
  }
`;

const disabledCss = css`
  background-color: red;
  color: ${primaryColor};
`;


export const Button = styled.button<ButtonProps>`
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
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;
  ${(props) => {
    switch(props.buttonType){
      case 'primary':
        return primaryCss;
      case 'secondary':
        return secondaryCss
      case 'cancel':
        return cancelCss;
      case 'disabled':
        return disabledCss;
      default:
        return primaryCss;
    }
  }}
  width: ${(props) => (props.fixedWidth ? '200px' : undefined)};
`;