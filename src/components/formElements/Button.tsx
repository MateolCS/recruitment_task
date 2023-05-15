import React from 'react'


import { StyledButton } from './Button.styled'

type ButtonProps = {
    message: string;
    type: 'submit' | 'button';
}


const Button = ({type, message}:ButtonProps) => {
  return (
    <StyledButton type={type}>
        {message}
    </StyledButton>
  )
}

export default Button
