import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  font-family: inherit;
  font-weight: 700;
  color: ${props => (props.primary ? '#fff' : '#111')};
  background: ${props => (props.primary ? 'hsl(220, 75%, 50%)' : '#fff')};
  border-color: ${props => (props.primary ? 'hsl(220, 75%, 50%)' : '#ddd')};
  border-width: ${props => (props.primary ? '0' : '2px')};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background: ${props =>
      props.primary ? 'hsl(220, 75%, 40%)' : 'hsl(0, 0%, 95%)'};
  }
`;

const Button = props => {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
