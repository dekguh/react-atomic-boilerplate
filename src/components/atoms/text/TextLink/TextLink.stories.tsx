import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import TextLink from '.'

export default {
  title: 'Atoms/Text/TextLink',
  component: TextLink,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Link](https://mui.com/material-ui/react-link/)'
      }
    }
  }
} as Meta<typeof TextLink>

const Story : StoryFn<typeof TextLink> = (args) => <TextLink {...args}/>

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  href: '#',
  children: 'link'
}