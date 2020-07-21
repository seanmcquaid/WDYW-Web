import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined,
  title : string,
};

const Button: React.FC<ButtonProps> = React.memo(({ onClick, type, title }) => (
  <StyledButton type={type} onClick={onClick}>
    {title}
  </StyledButton>
));

const StyledButton = styled.button`
  border : 2px solid black;
  outline : none;
  width : 80px;
  padding : 1rem;
  text-align : center;
  margin : 1rem;
`;

export default Button;