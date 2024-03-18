"use client"
import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import InputPassword from '@/components/common/InputPassword'
import Image from 'next/image'
import React, { useState } from 'react'

const ProfilePreferences = () => {

    const [name,setName] = useState("")
    const [currentPassword,setCurrentPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")

  return (
    <div className='grid grid-cols-12 gap-5 px-5 py-5 bg-[#fff] border-[1px] border-[#CFD5E1] rounded-[10px] '>
        <div className='col-span-12'>
            <div className='flex flex-col gap-4 items-center'>
                <div className='w-[170px] md:w-[200px] h-[170px] md:h-[200px] border-[2px] border-[#CFD5E1] grid grid-cols-2 gap-0 content-between overflow-hidden rounded-full'>
                    <div className='col-span-2 flex justify-center items-center pt-10 pb-8'>
                        <Image src={"/assets/images/emailSetting/company-logo.svg"} alt='company-logo' width={0} height={0} className='w-[100px] h-auto' />
                    </div>
                    <div className='col-span-2  bg-[#0266E1] w-full pt-3  pb-8 flex justify-center items-center'>
                        <button className='text-[16px] font-[700] text-[#fff] text-center bg-[#0266E1] '>Update</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-12'>
            <FormInputFiled value={name} onChange={(e)=>setName(e.target.value)} placeholder={"Enter Name"}/>
        </div>
        <div className='col-span-12'>
            <InputPassword
                htmlFor={"currentPassword"}
                id={"currentPassword"}
                placeholder={"Current Password"}
                classNameInput={"border-[#CFD5E1]"}
                onCopy={(e)=>{e.preventDefault()}}
                onPaste={(e)=>{e.preventDefault()}}
                value={currentPassword} 
                onChange={(e)=>{
                    setCurrentPassword(e.target.value)
                }} 
                // error={(Object.keys(formError).length>0&&formError.password2)?true:false}
                // errorMsg={Object.keys(formError).length>0&&formError.password2}
            />
        </div>
        <div className='col-span-12'>
            <InputPassword
                htmlFor={"NewPassword"}
                id={"NewPassword"}
                placeholder={"New Password"}
                classNameInput={"border-[#CFD5E1]"}
                onCopy={(e)=>{e.preventDefault()}}
                onPaste={(e)=>{e.preventDefault()}}
                value={currentPassword} 
                onChange={(e)=>{
                    setCurrentPassword(e.target.value)
                }} 
                // error={(Object.keys(formError).length>0&&formError.password2)?true:false}
                // errorMsg={Object.keys(formError).length>0&&formError.password2}
            />
        </div>
        <div className='col-span-12'>
            <FormInputFiled placeholder={"Enter Role"}/>
        </div>
        <div className='col-span-12'>
            <SaveChangesES text={"Save Changes"}/>
        </div>
        {/* <div className='col-span-12'>
            <button className='text-[20px] font-[700] text-[#0266E1] bg-none p-0 m-0 border-0 outline-0'>Change Password</button>
        </div> */}
    </div>
  )
}

export default ProfilePreferences