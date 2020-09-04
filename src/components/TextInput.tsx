import React from "react";
import styled from "styled-components";

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder: string;
  value: string;
  ref?: React.RefObject<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = React.memo(
  ({ onChange, title, placeholder, value, ref = null }) => (
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
  )
);

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-family: "Cabin", sans-serif;
  margin: 1rem;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  width: 200px;
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  font-family: "Cabin", sans-serif;
`;

export default TextInput;
