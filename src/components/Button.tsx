import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined,
  title : string,
};

const Button: React.FC<ButtonProps> = React.memo(({ onClick, type, title }) => (
  <StyledButton type={type} onClick={onClick} data-testid={`${title}Button`}>
    {title}
  </StyledButton>
));

const StyledButton = styled.button`
  border-radius : 10px;
  outline : none;
  width : 80px;
  padding : 1rem;
  text-align : center;
  margin : 1rem;
  background-color : #3891A6;
  color : white;
`;

export default Button;