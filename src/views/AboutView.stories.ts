import type { Meta, StoryObj } from '@storybook/vue3';

import AboutView from './AboutView.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Views/AboutView',
  component: AboutView,
  render: (args: any) => ({
    components: { AboutView },
    setup() {
      return { args };
    },
    template: '<about-view />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AboutView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};