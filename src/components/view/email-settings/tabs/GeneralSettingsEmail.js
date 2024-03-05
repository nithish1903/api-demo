"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import { Checkbox } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const GeneralSettingsEmail = () => {

    const [fontSize,setFontSize] = useState(0)

    const handleFontSizeInc = () => {
        setFontSize((count) => count + 1)
    }

    const handleFontSizeDec = () => {
        if (fontSize > 0) {
            setFontSize((count) => count - 1)
        }
    }

  return (
    <>
        <div className='mb-7'>
            <h6 className='font-[700]'>Customize the general settings related to the emails sent by Kasplo to your customers.</h6>
        </div>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-12'>
                <h5 className='text-[22px] font-[600]'>Profile Picture</h5>
            </div>
            <div className='col-span-12 flex flex-col gap-4 items-center'>
                <div className='w-[270px] md:w-[300px] h-[270px] md:h-[300px] border-[2px] border-[#CFD5E1] grid grid-cols-2 gap-0 content-between overflow-hidden rounded-full'>
                    <div className='col-span-2 flex justify-center items-center pt-10 pb-8'>
                        <Image src={"/assets/images/emailSetting/company-logo.svg"} alt='company-logo' width={0} height={0} className='w-[184px] h-auto' />
                    </div>
                    <div className='col-span-2 w-full '>
                        <button className='text-[24px] font-[700] text-[#fff] text-center bg-[#0266E1] w-full pt-6 pb-8'>Remove</button>
                    </div>
                </div>
                <div>
                    <Checkbox
                        id='titleCheck'
                        sx={{
                            color: "#0266E1",
                            '&.Mui-checked': {
                            color: "#0266E1",
                            },
                        }}
                    />
                    <label htmlFor='titleCheck' className='text-[16px] font-[700]'>Include title in form</label>
                </div>
            </div>
        </div>
        <div className=' grid grid-cols-12 gap-5 pb-10 border-b-2 border-[#CFD5E1]'>
            <div className='col-span-12 lg:col-span-4'>
                <FormInputFiled label={"From name:"} placeholder={"Fashion Studio"}/>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <FormInputFiled label={"From email:"} placeholder={"Fashion Studio"}/>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <FormInputFiled label={"Reply email:"} placeholder={"Fashion Studio"}/>
            </div>
        </div>
        <div className='grid grid-col-12 gap-5 mt-5'>
            <div className='col-span-12'>
                <h6 className='text-[700]'>Email Compatibility</h6>
            </div>
            <div className='col-span-12'>
                <p className='text-[16px]'>
                In case an email client has compatibility problems with review request email, review request contain a link to an external page where customers can respond.
                </p>
            </div>
            <div className='col-span-12 grid grid-cols-12 gap-5 md:gap-10 items-center pb-10 border-b-2 border-[#CFD5E1]'>
                <div className='col-span-12 lg:col-span-9'>
                    <FormInputFiled label={"Link body:"} placeholder={"Fashion Studio"}/>
                </div>
                <div className='w-[250px] ld:w-full col-span-12 lg:col-span-3'>
                    <div>
                        <p>Font Size</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-[22px] font-[700] py-2 cursor-pointer ' 
                            onClick={handleFontSizeDec}>-</p>
                        <input 
                            className={`py-1 px-5 text-center rounded-[4px] w-[100%] mt-1 text-[20px] font-[600] border-[2px] border-[#334851] text-[#334851]`}
                            value={fontSize} 
                            type={"number"}
                            onChange={(e)=>{(setFontSize(Number(e.target.value)))}}
                        />
                        <p className='text-[22px] font-[700] py-2 cursor-pointer'
                        onClick={handleFontSizeInc}>+</p>
                    </div>
                </div>
            </div>
            <div className='col-span-12 pt-8'>
                <SaveChangesES text={"Save Changes"} />
            </div>
        </div>
    </>
  )
}

export default GeneralSettingsEmail