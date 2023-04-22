import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import Slider from '.'

export default {
  title: 'Atoms/Input/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Slider](https://mui.com/material-ui/react-slider)'
      }
    }
  }
} as Meta<typeof Slider>

const Story : StoryFn<typeof Slider> = (args) => <Slider {...args} />

// EXAMPLE
export const Example = Story.bind({})
Example.args = {
  marks: [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ],
  valueLabelDisplay: 'on',
}
