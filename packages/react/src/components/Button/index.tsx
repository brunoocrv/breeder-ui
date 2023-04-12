import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '5px',
  fontSize: 16,
  fontFamily: 'Roboto',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 5px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  cursor: 'pointer',

  svg: {
    width: '16px',
    height: '16px',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary',

        '&:not(:disabled):hover': {
          opacity: 0.8,
        },
      },
      secondary: {
        background: '$secondary',
        color: '$primary',
        border: '2px solid $primary',

        '&:not(:disabled):hover': {
          opacity: 0.8,
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface IButton extends ComponentProps<typeof Button> {
  as?: ElementType
}
