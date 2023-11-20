import React from 'react'
import './button.css'

const Button = ({icon, text, color, textColor, sizeWidth, fontSize}) => {
  return (
    <button
    style={{backgroundColor: color,
            color: textColor,
            width: sizeWidth,
            "font-size": fontSize}}
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