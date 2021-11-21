import React from 'react'
import Dropdown, { OPTIONS } from './Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
}

//export const Default = () => <Dropdown />

// export const Default = () => (
//   <Dropdown
//     onChange={() => {}}
//     options={[
//       {
//         text: '8:00 AM',
//         value: 800,
//       },
//     ]}
//   />
// )

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: undefined,
  options: OPTIONS,
}
