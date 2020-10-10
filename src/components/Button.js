import React from 'react'

const Button=({value,onClick,style,className})=>(
    <button onClick={onClick} className={className} style={style}>{value}</button>

)

export default Button;