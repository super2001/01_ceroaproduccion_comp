import React from 'react'
import Icon, { TYPES, SIZE } from './Icon'

export default {
  component: Icon,
  title: 'Atoms/Icon',
}

const Template = (args) => <Icon {...args} />

export const ArrowRight = Template.bind({})
ArrowRight.args = {
  size: SIZE[0],
  type: TYPES[0],
  hasBackground: false,
}

export const AngleDown = Template.bind({})
AngleDown.args = {
  size: SIZE[0],
  type: TYPES[1],
  hasBackground: false,
}

export const HasBackground = Template.bind({})
HasBackground.args = {
  size: SIZE[0],
  type: TYPES[1],
  hasBackground: true,
}
