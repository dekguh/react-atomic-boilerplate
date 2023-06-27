import React from 'react'

// COMPONENTS
import FormSignUp from '.'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/auth/FormSignUp',
  component: FormSignUp
} as Meta<typeof FormSignUp>

export const Example : StoryFn<typeof FormSignUp> = (args) => <FormSignUp {...args}/>
