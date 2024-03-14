import React from 'react'

const Label = ({label,className,htmlFor}) => {
  return (
    <label htmlFor={htmlFor?htmlFor:""}  className={`text-[14px] font-[400] text-[#334851] ${className?className:""}`} >{label}</label>
  )
}

export default Label