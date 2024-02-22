import type { Meta, StoryObj } from '@storybook/vue3';

import HelloWorld from './HelloWorld.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/HelloWorld',
  component: HelloWorld,
  render: (args: any) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<hello-world :msg="args.msg" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    msg: '',
  },
};