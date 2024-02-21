import React from 'react'
import Label from './Label'

const InputText = ({label,htmlFor,id,type,onChange,value,placeholder,error,errorMsg}) => {
  return (
    <div>
        <Label label={label} htmlFor={htmlFor}/>
        <input 
            className={`border-[2px] ${error?"text-[#C7022D] border-[#C7022D]":"border-[#334851] text-[#334851]"}  py-2.5 px-5 rounded-[4px] w-[100%] mt-1 text-[12px] font-[400]`}
            value={value} 
            id={id?id:""}
            type={type?type:"text"} 
            onChange={onChange} 
            placeholder={placeholder?placeholder:"Enter"}
        />
        {
            error && <p className='text-[#C7022D] text-[12px] font-[400] m-0'>{errorMsg}</p>
        }
    </div>
  )
}

export default InputText