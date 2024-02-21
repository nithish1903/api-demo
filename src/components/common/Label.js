import React from 'react'

const Label = ({label,className,htmlFor}) => {
  return (
    <label htmlFor={htmlFor?htmlFor:""}  className={`text-[12px] font-[400] text-[#334851] ${className}`} >{label}</label>
  )
}

export default Label