import React from 'react';
import styled from 'styled-components';

type FormProps = {
  onSubmit: (event: React.SyntheticEvent) => void;
  children: React.ReactNode;
};

const Form: React.FC<FormProps> = React.memo(({ onSubmit, children }) => (
  <StyledForm onSubmit={onSubmit}>
    {children}
  </StyledForm>
));

const StyledForm = styled.form`
  display : flex;
  justify-content : center;
  flex-direction : column;
  align-items : center;
`;

export default Form;