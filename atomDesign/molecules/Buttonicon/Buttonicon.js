import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icons/Icon'

export const BUTTON_TYPES = ['primary', 'secondary', 'tertiary']
export const ICON_TYPES = ['arrowRight', 'xxxxx']

const Buttonicon = ({ children, buttonType, iconType }) => (
  <Button type={buttonType} isBlock={false}>
    <span style={{ marginRight: 10 }}>{children}</span>
    <Icon type={iconType} />
  </Button>
)

Buttonicon.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(BUTTON_TYPES),
  iconType: PropTypes.oneOf(ICON_TYPES),
}

Buttonicon.defaultProps = {
  children: 'primary',
  buttonType: BUTTON_TYPES[1],
  iconType: ICON_TYPES[0],
}

export default Buttonicon
