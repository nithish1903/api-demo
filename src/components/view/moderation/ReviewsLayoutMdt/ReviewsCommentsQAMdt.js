import React, { useState } from 'react'

import { BiMessageSquareDetail } from "react-icons/bi";
import PublishedDrepDown from './PublishedDrepDown';
// import DotsDropDownMdt from './DotsDropDownMdt';
import WriteComments from './WriteComments';
import { Button } from '@mui/material';
import useToggle from '@/hooks/useToggle';
import { formatDateModerationReview } from '@/lib/others/timeConvertion';
import ListCommentsRCMdt from './ListComments/ListCommentsRCMdt';

const ReviewsCommentsQAMdt = ({name,email,created_at,question,comment,_id}) => {
    const [writeComment,setWriteComment] = useState("")
    const [privateComment,setPrivateComment] = useState(false)
    const [showWriteComment,setShowWriteComment] = useState(false)

    const handleShowWriteComment = ()=>{
        setShowWriteComment(!showWriteComment) 
        setWriteComment("")
        setPrivateComment(false)
    } 
    const { toggle,handleToggle } = useToggle()

  return (
    <div className='grid grid-cols-12 gap-4 px-3 lg:px-8 py-8 border-2 border-[#CFD5E1] rounded-[10px]'>
        <div className='col-span-12 lg:col-span-3 grid grid-cols-1 content-between h-[100%] gap-5 lg:gap-2'>
            <div className='flex gap-3 items-center'>
                {/* <div>
                    <Checkbox sx={{padding:"0px"}}/>
                </div> */}
                 <div>
                    <h6 className='font-[700]'>{name?name:"Null"}</h6>
                    <p className='text-[#bfbfbf] text-[16px]'>{created_at?formatDateModerationReview(created_at) :"Null"}</p>
                    <p className='text-[12px] mt-5'>{email?email:"Null"} <span className='block text-[#0266E1] font-[600]'>(View Timeline)</span></p>
                </div>
                
            </div>
            <div className=''>
                <PublishedDrepDown _id={_id} />
            </div>
        </div>
        <div className='col-span-12 lg:col-span-6'>
            <div>
                <h5>{question?question:"Null"}</h5>
            </div>
        </div>
        <div className='col-span-12 lg:col-span-3 grid grid-cols-1 lg:content-between h-[100%] gap-4'>
            <div className='flex items-center lg:justify-end gap-3 relative'>
                <button onClick={handleShowWriteComment} className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 py-1.5 rounded-[4px]'>
                    Comments
                    <BiMessageSquareDetail className='text-[#0266E1] w-[14px] h-[14px]'/>
                </button>
                <WriteComments _id={_id} privateComment={privateComment} setPrivateComment={setPrivateComment} writeComment={writeComment} setWriteComment={setWriteComment} handleShowWriteComment={handleShowWriteComment} showWriteComment={showWriteComment} setShowWriteComment={setShowWriteComment}/>
                {/* <DotsDropDownMdt /> */}
            </div>
        </div>
        {
            comment && comment.length>0 && (
                <div className='col-span-12'>
                        <div>
                            <Button variant="text" className='text-[#0266E1]' onClick={handleToggle}>{toggle?"Hide Comments":"Show Comments"}</Button>
                        </div>
                        {
                            toggle && (
                                <div>
                                    {
                                        comment.map((comment,c)=>{
                                            return <ListCommentsRCMdt key={c} comment={comment} _id={_id}/>
                                        })
                                    }
                                </div>
                            )
                        }
                </div>
            )
        }
    </div>
  )
}

export default ReviewsCommentsQAMdt