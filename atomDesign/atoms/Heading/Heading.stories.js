import React from 'react'
import Heading, { SIZES } from './Heading'

export default {
  component: Heading,
  title: 'Atoms/Heading',
  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default text',
  size: SIZES[0],
  color: 'default',
}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
  children: 'ColorPrimary text',
  size: SIZES[1],
  color: 'primary',
}

export const ColorDefault = Template.bind({})
ColorDefault.args = {
  children: 'ColorDefault text',
  size: SIZES[1],
  color: 'default',
}

export const PrimaryStraSmall = Template.bind({})
PrimaryStraSmall.args = {
  children: 'Primary text',
  size: SIZES[0],
  color: 'primary',
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  children: 'Small text',
  size: SIZES[1],
  color: 'primary',
}

export const PrimaryMedium = Template.bind({})
PrimaryMedium.args = {
  children: 'Medium text',
  size: SIZES[2],
  color: 'primary',
}
