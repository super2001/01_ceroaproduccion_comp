import React from 'react'
import Buttonicon, { BUTTON_TYPES, ICON_TYPES } from './Buttonicon'

export default {
  component: Buttonicon,
  title: 'Molecules/ButtonIcon',
}

const Template = (args) => <Buttonicon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Siguiente',
  buttonType: BUTTON_TYPES[1],
  iconType: ICON_TYPES[0],
}
