import React from 'react'

const Button = ({children,className,type}) => {
  return (
    <button type={type?type:"button"} className={`py-2.5 rounded-[4px] w-[100%] bg-[#0266E1] text-[#fff] text-[18px] font-[500] ${className?className:""}`}>{children}</button>
  )
}

export default Button