import React from 'react'

const FormInputFiled = ({label,classlabel,htmlFor,id,type,onChange,value,placeholder,error,errorMsg,classInput,classbox,inuputProps}) => {
  return (
    <div className={classbox}>
        <label htmlFor={htmlFor?htmlFor:""}  className={`text-[16px] font-[700] text-[#334851] ${classlabel?classlabel:""}`} >{label}</label>
        <input 
            className={`${classInput?classInput:""} border-[2px] ${error?"text-[#C7022D] border-[#C7022D]":"border-[#CFD5E1] text-[#334851]"}  py-3 px-3 rounded-[4px] w-[100%] mt-1 text-[16px] font-[500] `}
            value={value} 
            id={id?id:""}
            type={type?type:"text"} 
            onChange={onChange} 
            placeholder={placeholder?placeholder:"Enter"}
            {...inuputProps}
        />
        {
            error && <p className='text-[#C7022D] text-[12px] font-[400] m-0'>{errorMsg}</p>
        }
    </div>
  )
}

export default FormInputFiled