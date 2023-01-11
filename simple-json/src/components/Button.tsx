import { string, func } from 'prop-types'
import React from 'react'
export declare interface ButtonProps {
  color: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
const Button = ({color, text, onClick}: ButtonProps) => {

  return (
    <div>
      <button className='btn' style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
