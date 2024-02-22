import type { Meta, StoryObj } from '@storybook/vue3'

import WelcomeItem from './WelcomeItem.vue'
import IconCommunity from './icons/IconCommunity.vue'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/WelcomeItem',
  component: WelcomeItem,
  render: (args: any) => ({
    components: { WelcomeItem },
    setup() {
      return { args }
    },
    template: '<welcome-item />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    slots: {
      heading: {
        template: `<h1>{{args.heading}}</h1>`
      },
      icon: {
        template: `<icon-community />`,
        components: { IconCommunity }
      }
    }
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof WelcomeItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Welcome to Storybook'
  }
}
