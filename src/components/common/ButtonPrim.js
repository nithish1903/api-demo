import React from 'react'

const ButtonPrim = ({children,className,type,onClick}) => {
  return (
    <button onClick={onClick} type={type?type:"button"} className={`py-2.5 px-4 rounded-[4px] w-[100%] bg-[#0266E1] hover:bg-[#334851] text-[#fff] text-[18px] font-[500] ${className?className:""}`}>{children}</button>
  )
}

export default ButtonPrim