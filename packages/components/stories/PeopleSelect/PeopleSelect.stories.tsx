import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import PeopleSelect from "./index";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export default {
  title: "Business/Select",
  component: PeopleSelect,
  // 使用了react-query的组件才使用devtools
  decorators: [
    (Story) => <>
      <Story />
      <ReactQueryDevtools />
    </>
  ]
} as ComponentMeta<typeof PeopleSelect>;

const Template: ComponentStory<typeof PeopleSelect> = () => <PeopleSelect />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get("/people", (req, res, ctx) => {
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", value: 1 },
              { name: "Arlene Mccoy", value: 2 },
              { name: "Devon Webb", value: 2 },
              { name: "Tom Cook", value: 2 },
              { name: "Tanya Fox", value: 2 },
              { name: "Hellen Schmidt", value: 2 },
            ],
          })
        );
      }),
    ]
  }
}