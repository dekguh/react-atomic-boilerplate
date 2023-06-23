import React from 'react'
import type { Preview } from '@storybook/react'
import MainWrapper from '../src/wrapper/MainWrapper'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <MainWrapper><Story /></MainWrapper>
    )
  ]
};

export default preview;
