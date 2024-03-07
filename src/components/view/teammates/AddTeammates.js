import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import { SmallModalBox } from '@/components/common/ModalBox';
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const AddTeammates = ({open,handleModal}) => {
   
  return (
    <>
        <SmallModalBox open={open} handleModal={handleModal}>
            <div className='grid grid-cols-12 gap-5 px-2 md:px-5 py-2.5 md:py-5 bg-[#fff] border-[1px] border-[#CFD5E1] rounded-[10px] '>
                <div className='col-span-12'>
                    <div className='flex items-center justify-between'>
                        <h6 className='font-[700]'>Add Teammate</h6>
                        <div onClick={handleModal} className='w-[35px] h-[35px]'>
                            <IoIosCloseCircle  className='w-[35px] h-[35px] text-[#afb4c0] cursor-pointer hover:text-[#0266E1]'/>
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
                    <SaveChangesES text={"Save Teammate"}/>
                </div>
            </div>
        </SmallModalBox>
    </>
  )
}

export default AddTeammates