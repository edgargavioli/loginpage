import React from 'react'
import './button.css'

const Button = ({icon, text, color, textColor, sizeWidth, fontSize, onClick}) => {
  return (
    <button
    onClick={onClick}
    style={{backgroundColor: color,
            color: textColor,
            width: sizeWidth,
            fontSize: fontSize}}
    >   {
            icon != null ? <img src={icon} /> : null
        }
        {
            text != null ? text : null
        }
    </button>
  )
}

export default Button