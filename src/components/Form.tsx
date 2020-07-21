import React from 'react';
import styled from 'styled-components';

type FormProps = {
  onSubmit: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
  <StyledForm onSubmit={onSubmit}>
    {children}
  </StyledForm>
);

const StyledForm = styled.form``;

export default Form;