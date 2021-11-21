import React from 'react'
import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  //argTypes: { onChange: { action: 'changed' } },
}

const Template = (args) => <Input {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  //onChange:{() => {}},
  type: 'text',
  value: '',
  placeholder: 'Nombres',
}

/*
export const Text = () => (
  <Input onChange={() => {}} type="text" placeholder="Nombres" />
)
}
*/
