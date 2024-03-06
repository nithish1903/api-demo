import FormInputFiled from '@/components/common/FormInputFiled'
import Image from 'next/image'
import React from 'react'

const ProfilePreferences = () => {
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
            <FormInputFiled placeholder={"Enter Name"}/>
        </div>
        <div className='col-span-12'>
            <FormInputFiled placeholder={"Enter Email Address"}/>
        </div>
        <div className='col-span-12'>
            <FormInputFiled placeholder={"Enter Role"}/>
        </div>
        <div className='col-span-12'>
            <button className='text-[20px] font-[700] text-[#0266E1] bg-none p-0 m-0 border-0 outline-0'>Change Password</button>
        </div>
    </div>
  )
}

export default ProfilePreferences