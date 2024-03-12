"use client"
import React from 'react'
import { FiEyeOff ,FiEye} from "react-icons/fi";
import Label from './Label';

const InputPassword = ({label,value,onChange,placeholder,htmlFor,id,error,errorMsg,classLable,onCopy,onPaste}) => {
    const [show,setShow] = React.useState(false)

  return (
    <div>
        <Label className={classLable} htmlFor={htmlFor} label={label?label:"Password"} />
        <div className=' relative'>
                <input 
                    className={`border-[2px] ${error?"text-[#C7022D] border-[#C7022D]":"border-[#334851] text-[#334851]"}  py-2.5 px-5 rounded-[4px] w-[100%] mt-1 text-[12px] font-[400]`}
                    value={value}
                    type={show?"text":"password"} 
                    onChange={onChange} 
                    id={id?id:""}
                    onCopy={onCopy}
                    onPaste={onPaste}
                    placeholder={placeholder?placeholder:"Enter Password"}
                />
                <div className='absolute top-5 right-5 cursor-pointer' onClick={()=>setShow(!show)}>
                {
                    show?<FiEye />:<FiEyeOff />
                }
                </div>
        </div>
        {
            error && <p className='text-[#C7022D] text-[12px] font-[400] m-0'>{errorMsg}</p>
        }
    </div>
  )
}

export default InputPassword