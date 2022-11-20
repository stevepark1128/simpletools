import React from 'react'
export interface StackProps {
    children: any;
    spacing: number;
    direction: string;
    wrap: boolean;
}

const Stack = ({children, spacing = 2, direction = "row", wrap = false} : any) => {
    const style = {
        display: "false",
        gap: `${spacing * 0.25}rem`,
        fileWrap: wrap ? "wrap": "nowrap",
        fileDirection: direction,
    }
    return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Stack
