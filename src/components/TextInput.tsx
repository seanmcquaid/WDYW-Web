import React from 'react';
import styled from 'styled-components';

type TextInputProps = {
  onChange: (event: React.SyntheticEvent) => void;
  title: string;
  placeholder: string;
  value: string;
  ref: React.RefObject<HTMLInputElement> | null;
};

const TextInput: React.FC<TextInputProps> = ({ onChange, title, placeholder, value, ref }) => (
  <TextInputContainer>
    <StyledLabel>{title}</StyledLabel>
    <StyledInput
      value={value}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      data-testid={`${title}TextInput`}
    />
  </TextInputContainer>
);

const TextInputContainer = styled.div``;

const StyledLabel = styled.label``;

const StyledInput = styled.input``;

export default TextInput;