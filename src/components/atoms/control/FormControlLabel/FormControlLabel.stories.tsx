import React from 'react'

// STORYBOOK
import { Meta, StoryFn } from '@storybook/react'

// COMPONENTS
import FormControlLabel from '.'
import CheckboxComponent from '@/components/atoms/input/Checkbox'
import RadioComponent from '@/components/atoms/input/Radio'
import SwitchComponent from '@/components/atoms/input/Switch'

export default {
  title: 'Atoms/Control/Form Control Label',
  component: FormControlLabel,
  parameters: {
    docs: {
      description: {
        component: 'Documentation of [Form Control Label](https://mui.com/material-ui/api/form-control-label/)'
      }
    }
  }
} as Meta<typeof FormControlLabel>

export const Checkbox : StoryFn<typeof FormControlLabel> = () => <FormControlLabel
  label='checkbox'
  control={<CheckboxComponent />}
/>

export const Radio : StoryFn<typeof FormControlLabel> = () => <FormControlLabel
  label='radio'
  control={<RadioComponent />}
/>

export const Switch : StoryFn<typeof FormControlLabel> = () => <FormControlLabel
  label='switch'
  control={<SwitchComponent />}
/>