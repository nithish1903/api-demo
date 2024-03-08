import Label from '@/components/common/Label'
import SwitchGreen from '@/components/common/SwitchGreen'
import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const WriteComments = ({showComment,handleShowComment,setShowComment}) => {
    const refOne = useRef(null)

    useEffect(()=>{
        document.addEventListener("keydown",handleHide,true)
        document.addEventListener("click",handleOnClickOutside,true)
    },[])


  const handleHide = (e)=>{
    if(e.key == "Escape"){
        setShowComment(false)
    }
  }

  const handleOnClickOutside = (e)=>{
    if(refOne.current && !refOne.current.contains(e.target)){
        setShowComment(false)
    }
  }

  return (
    <>
        {
            (
                <div ref={refOne} onClick={()=>{setShowComment(false)}} className={`${showComment?"block":"hidden"} absolute bottom-0 -right-4 sm:right-0 z-[200] bg-[#fff] shadow-lg w-[280px] md:w-[400px] lg:w-[500px]`}>
                    <div className='px-4 py-4'>
                        <div>
                            <textarea className='border-2 border-[#334851] w-full px-2 py-2' rows={8}></textarea>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div className='col-span-2 lg:col-span-1 flex items-center gap-3'>
                                <SwitchGreen id="privatemsg"/>
                                <Label htmlFor="#privatemsg" label={"Send as private message"}/>
                            </div>
                            <div className='col-span-2 lg:col-span-1 flex items-center lg:justify-end gap-3'>
                                <Button variant="text" onClick={handleShowComment}>Cancel</Button>
                                <Button variant="contained">Publish</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default WriteComments