import { number, string } from 'prop-types'
import React from 'react'

export declare interface TextAreaProps {
  rows: number;
  cols: number;
  value: string;
  title: string;
}
const TextArea = ({rows = 30, cols = 50, value = "", title = ""}: any) => {
  return (
    <div>
      <div><label>{title} : </label></div>
      <div><textarea
        rows={rows}
        cols={cols}
      >{value}</textarea></div>
    </div>
  )
}

export default TextArea
