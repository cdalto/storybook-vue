import type { Meta, StoryObj } from '@storybook/vue3'

import TheWelcome from './TheWelcome.vue'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/TheWelcome',
  component: TheWelcome,
  render: (args: any) => ({
    components: { TheWelcome },
    setup() {
      return { args }
    },
    template: '<the-welcome />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TheWelcome>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
