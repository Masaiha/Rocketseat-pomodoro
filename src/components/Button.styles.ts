import styled, { css } from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

// const buttonVariants = {
//   primary: 'blue',
//   secondary: 'gray',
//   warning: 'yellow',
//   success: 'green',
//   danger: 'red',
//   neutral: 'black',
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 20px;
  margin: 1rem;
  border-radius: 4px;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  ${(props) => {
    return css`
      display: 'block';
    `
    // `background: ${buttonVariants[props.variant]}`
  }}
`
