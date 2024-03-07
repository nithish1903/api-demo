import { SaveChangesES } from '@/components/common/ButtonEmailSettings'
import FormInputFiled from '@/components/common/FormInputFiled'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const FilterSearchMdt = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 pb-6 border-b-2 border-[#334851]'>
            <div className=' relative'>
                <input className='pl-8 pr-4 py-4 border-2 border-[#CFD5E1] rounded-[6px] w-full' placeholder='Search content & email address' />
                <div className=' absolute top-[50%] translate-y-[-50%] left-2'>
                    <FiSearch className='w-[20px] h-[20px] text-[#334851]'/>
                </div>
            </div>
        </div>
        <div className='col-span-12 pt-5 '>
            <div className='mb-4'>
                <h6 className='font-[700]'>Filter</h6>
            </div>
            <div className='mb-2'>
                <FormInputFiled placeholder={"Scheduled To Publish"} classInput={"w-full"}/>
            </div>
            <div>
                <SaveChangesES text={"Total Reviews"} className={"lg:text-left w-full"}/>
            </div>
        </div>
    </div>
  )
}

export default FilterSearchMdt