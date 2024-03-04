import Image from 'next/image'
import React from 'react'
import { BsArrowsFullscreen } from "react-icons/bs";

const PreviewEmailSettings = () => {
  return (
    <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-12 flex justify-end'>
            <div className='flex items-center'>
                <p className='bg-[#334851] text-[12px] w-[20px] h-[20px] flex justify-center items-center font-bold rounded-full text-[#fff] mr-2.5'>?</p>
                <p className='text-[#0266E1] text-[14px] '>About This Feature</p>
            </div>
        </div>
        <div className='col-span-12 mt-5'> 
            <div className="w-[100%] h-[751px] rounded-[10px] bg-[url('/assets/images/emailSetting/bg-preview.svg')]">
                <div className='bg-[#F8F8F8] px-5 py-4 flex items-center justify-between rounded-t-[10px]'>
                    <p className='font-[600]'>Preview</p>
                    <div className='flex items-center gap-2'>
                        <p className='font-[600]'>Full Screen</p>
                        <div>
                            <BsArrowsFullscreen className='w-[20px] h-[20px] text-[#334851]' />
                        </div>
                    </div>
                </div>
                <div className='py-[46px] px-10'>
                    <Image src={"/assets/images/emailSetting/preview-image.svg"} alt='bg-preview' width={0} height={0} className='w-[100%] h-auto mx-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreviewEmailSettings