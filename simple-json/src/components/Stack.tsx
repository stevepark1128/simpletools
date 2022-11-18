import React from 'react'

interface HeaderProps {
    children: any;
    spacing: number;
    direction: string;
    wrap: boolean;
  }

const Stack = ({children, spacing = 2, direction = "row", wrap = false} : any) => {
    const style: any = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
    }
    return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Stack
