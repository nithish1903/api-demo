import React from 'react'

import  {SelectOptions } from '@/components/common/SelectOptions';
import { ColorPickerES } from '@/components/common/ColorPicker';
import { Radio } from '@mui/material';
import Label from '@/components/common/Label';

const SettingsLooksFeelES = ({starColor,setStarColor,status,handleStatus,btnPositionOptions,title,fontOptions,currentFont,setCurrentFont,color1,setColor1,color2,setColor2,btnPosition,setbtnPosition}) => {

  return (
    <>
         <div className='grid grid-cols-12 gap-5 md:gap-10 pb-8 border-b-2 border-[#CFD5E1] items-center'>
            <div className='col-span-12'>
                <h6 className='font-[700]'>{title}</h6>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <p className='text-[16px]'>Status:</p>
            </div>
            <div className=' col-span-12 lg:col-span-8 flex items-center gap-4'>
                <div>
                    <Radio id='status_acive' checked={status===true} onChange={handleStatus}/>
                    <Label htmlFor={"status_acive"} label={"Active"}/>
                </div>
                <div>
                    <Radio id='status_Inacive' checked={status===false} onChange={handleStatus} />
                    <Label htmlFor={"status_Inacive"} label={"Inactive"}/>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <p className='text-[16px]'>Font Family:</p>
            </div>
            <div className=' col-span-12 lg:col-span-8'>
                <SelectOptions 
                    className={"w-[240px] cursor-pointer"} 
                    options={fontOptions} 
                    placeholder={"Select Font"} 
                    handleChange={(e)=>{ setCurrentFont(e.target.value) }}  
                    value={currentFont} 
                />
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <p className='text-[16px]'>Star Color:</p>
            </div>
            <div className=' col-span-12 lg:col-span-8 cursor-pointer'>
                <ColorPickerES color={starColor} setColor={setStarColor} />
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <p className='text-[16px]'>Button Color:</p>
            </div>
            <div className=' col-span-12 lg:col-span-8 cursor-pointer'>
                <ColorPickerES color={color1} setColor={setColor1} />
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <p className='text-[16px]'>Button Title Color:</p>
            </div>
            <div className=' col-span-12 lg:col-span-8 cursor-pointer'>
                <ColorPickerES color={color2} setColor={setColor2} />
            </div>
            {
                title && title !== "Product Reviews" && (
                    <>
                        <div className='col-span-12 lg:col-span-4'>
                            <p className='text-[16px]'>Button Position:</p>
                        </div>
                        <div className=' col-span-12 lg:col-span-8'>
                            <SelectOptions 
                                className={"w-[240px] cursor-pointer"} 
                                options={btnPositionOptions} 
                                placeholder={"Select Font"} 
                                handleChange={(e)=>{ setbtnPosition(e.target.value) }}  
                                value={btnPosition} 
                            />
                        </div>
                    </>
                )
            }
           
        </div>
    </>
  )
}

export default SettingsLooksFeelES