import React from 'react'

// COMPONENTS
import FormSignIn from '.'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/auth/FormSignIn',
  component: FormSignIn
} as Meta<typeof FormSignIn>

export const Example : StoryFn<typeof FormSignIn> = (args) => <FormSignIn {...args}/>
