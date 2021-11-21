import React from 'react'
import Picture from './Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

const Template = (args) => <Picture {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://placeimg.com/400/400/any',
  width: 200,
}
