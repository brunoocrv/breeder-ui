import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { FaChevronRight } from 'react-icons/fa'
import { Button, IButton } from '@breeder-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<IButton>

export const Primary: StoryObj<IButton> = {}

export const Secondary: StoryObj<IButton> = {
  args: {
    variant: 'secondary',
  },
}

export const Small: StoryObj<IButton> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<IButton> = {
  args: {
    children: (
      <>
        Send
        <FaChevronRight />
      </>
    ),
  },
}

Button.displayName = 'Button'
