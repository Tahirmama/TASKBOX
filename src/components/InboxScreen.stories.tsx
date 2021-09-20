import React from 'react';
import { Provider } from 'react-redux';
import { PureInboxScreen } from './InboxScreen';
import { action } from '@storybook/addon-actions';
import { store } from "../Redux/redux";
import { Meta } from "@storybook/react/types-6-0";
import * as TaskListStories from './TaskList.stories';



export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template = (args:any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error: any = Template.bind({});
Error.args = {
  error: 'Something',
};  