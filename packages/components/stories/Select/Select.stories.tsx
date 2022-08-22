import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Select, { DataType } from "./index";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;


const basicList: DataType[] = [
  { name: "Option1", value: 1 },
  { name: "Option2", value: 2 },
];

const Template: ComponentStory<typeof Select> = (args) => {
  const [sekected, setSelected] = useState(basicList[0]);
  return (
    <Select {...args} onChange={(e) => setSelected(e)} selected={sekected} />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  data: basicList,
};
