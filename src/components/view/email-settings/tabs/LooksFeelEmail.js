import { SaveChangesES } from '@/components/common/ButtonEmailSettings';
import  {SelectOptions } from '@/components/common/SelectOptions';
import { Checkbox } from '@mui/material';
import React from 'react'
import { ColorPickerES } from '@/components/common/ColorPicker';

const LooksFeelEmail = () => {
   
    const [fontOptions,setFontOptions] = React.useState(["Poppins Sans","Sans","Roboto","Time New Roman"])
    const [currentFont, setCurrentFont] = React.useState(fontOptions[0]);

    const [alignment,setAlignment] = React.useState(["Center","Left","Right"])
    const [currentAlignment, setCurrentAlignment] = React.useState(fontOptions[0]);

    const [color1, setColor1] = React.useState("#00A3FF");
    const [color2, setColor2] = React.useState("#00FFA3");
    
  return (
    <di className="grid grid-cols-12">
         <div className='col-span-12 mb-5'>
            <h6 className='font-[700]'>Text Style</h6>
        </div>
        <div className='col-span-12 grid grid-cols-12 gap-5 md:gap-10 pb-8 border-b-2 border-[#CFD5E1]'>
            <div className=' col-span-12 flex lg:items-center flex-col md:flex-row gap-2 md:gap-4'>
                <p className='text-[16px]'>Text Font:</p>
                <SelectOptions className={"w-[240px]"} options={fontOptions} placeholder={"Select Font"} handleChange={(e)=>{ setCurrentFont(e.target.value) }}  value={currentFont} />
            </div>
            <div className=' col-span-12 flex lg:items-center flex-col md:flex-row gap-2 md:gap-4'>
                <p className='text-[16px]'>Allignment:</p>
                <SelectOptions className={"w-[240px]"} options={alignment} placeholder={"Select alignment"} handleChange={(e)=>{ setCurrentAlignment(e.target.value) }}  value={currentAlignment} />
            </div>
        </div>
        <div className='col-span-12 mb-5 pt-8'>
            <h6 className='font-[700]'>Rating Labels</h6>
        </div>
        <div className='col-span-12 flex items-center gap-4 pb-8 border-b-2 border-[#CFD5E1]'>
            <Checkbox
                id='titleCheck'
                sx={{
                    color: "#0266E1",
                    '&.Mui-checked': {
                    color: "#0266E1",
                    },
                }}
            />
            <label htmlFor='titleCheck' className='text-[16px]'>Show rating labels</label>
        </div>
        <div className='col-span-12  mb-5 pt-8'>
            <h6 className='font-[700]'>Text Style</h6>
        </div>
        <div className='col-span-12 grid grid-cols-12 gap-4 lg:gap-10 pb-8 border-b-2 border-[#CFD5E1]'>
            
            <div className=' col-span-12 flex lg:items-center flex-col md:flex-row gap-2 md:gap-4'>
                <p className='text-[16px] font-[700]'>Allignment:</p>
                <ColorPickerES color={color1} setColor={setColor1} />
            </div>
            <div className=' col-span-12 flex lg:items-center flex-col md:flex-row gap-2 md:gap-4'>
                <p className='text-[16px] font-[700]'>Allignment:</p>
                <ColorPickerES color={color2} setColor={setColor2} />
            </div>
        </div>
        <div className='col-span-12 mt-9'>
            <SaveChangesES text={"Save Changes"} />
        </div>
    </di>
  )
}

export default LooksFeelEmail