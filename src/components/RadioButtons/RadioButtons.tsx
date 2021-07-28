/* eslint-disable react/jsx-props-no-spreading */

import styled from '@emotion/styled';
import * as React from 'react';

export interface RadioButtonProps {
    children: React.ReactNode;
    hint?: string;
    options: Array<string>;
    name: string;
    checked: string;
    question: string;
    onChange?: () => void;
}

const StyledRadioButtonInput = styled.input`

`;

const StyledFieldset = styled.fieldset`
  border: 0;
`;

const HintText = styled.p`
  color: #727272;
  margin-bottom: 16px;
`;

const Legend = styled.legend`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RadioButton = (props: any) => <StyledRadioButtonInput type="radio" {...props} />;

export const RadioButtons = ({
  hint,
  options,
  name,
  checked,
  question,
  onChange,
}: RadioButtonProps): JSX.Element => (
  <StyledFieldset>
    <Legend>{question}</Legend>
    <HintText>{hint}</HintText>
    {options.map((option: string) => (
      <div>
        <RadioButton
          id={option}
          name={name}
          checked={checked === option}
          value={option}
          onChange={onChange}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </StyledFieldset>
);

export default RadioButtons;
