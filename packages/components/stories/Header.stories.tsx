import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};
// 有doc
LoggedIn.parameters = {
  docs: {
    source: {
      type: 'auto', // doc可以自动生成文档
      code: `<Header />`, // 自定义展示文档中的代码
      language: 'tsx'
    }
  }
}

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
