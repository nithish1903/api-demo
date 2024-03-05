import React from 'react'

export const SaveChangesES = ({text,type}) => {
  return (
    <button type={type?type:"button"} className='px-6 py-3 rounded-[3px] bg-[#0266E1] text-[18px] font-[700] text-[#fff] text-center'>{text}</button>
  )
}

export const OutLineBtnEmail = ({text,type}) => {
    return (
      <button type={type?type:"button"} className='px-6 py-3 rounded-[3px] bg-[#fff] hover:bg-[#0266E1] border-2 border-[#0266E1] text-[18px] font-[700] hover:text-[#fff] text-[#0266E1] text-center'>{text}</button>
    )
  }