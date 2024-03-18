import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { IoStarOutline } from 'react-icons/io5';
import { BiMessageSquareDetail, BiSolidEdit } from "react-icons/bi";
import PublishedDrepDown from './PublishedDrepDown';
// import DotsDropDownMdt from './DotsDropDownMdt';
import WriteComments from './WriteComments';
import { Button } from '@mui/material';
import useToggle from '@/hooks/useToggle';
import { formatDateModerationReview } from '@/lib/others/timeConvertion';
import { MdDelete } from 'react-icons/md';
import ListCommentsRCMdt from './ListComments/ListCommentsRCMdt';

const ReviewsCommentsMdt = ({user,created_at,title,content,rating,comment,_id,status}) => {
    const [writeComment,setWriteComment] = useState("")
    const [privateComment,setPrivateComment] = useState(false)
    const [showWriteComment,setShowWriteComment] = useState(false)

    const handleShowWriteComment = ()=>{
        setShowWriteComment(!showWriteComment) 
        setWriteComment("")
        setPrivateComment(false)
    } 
    const { toggle,handleToggle } = useToggle()

    const countMinsStar = rating && 5-rating

    
  return (
    <div className='grid grid-cols-12 gap-4 px-3 lg:px-8 py-8 border-2 border-[#CFD5E1] rounded-[10px]'>
        <div className='col-span-12 lg:col-span-3 grid grid-cols-1 content-between h-[100%] gap-5 lg:gap-2'>
            <div className='flex gap-3 items-center'>
                {/* <div>
                    <Checkbox sx={{padding:"0px"}}/>
                </div> */}
                <div>
                    <h6 className='font-[700]'>{user.name?user.name:"Null"}</h6>
                    <p className='text-[#bfbfbf] text-[16px]'>{created_at?formatDateModerationReview(created_at) :"Null"}</p>
                    <p className='text-[12px] mt-5'>{user.email?user.email:"Null"} <span className='block text-[#0266E1] font-[600]'>(View Timeline)</span></p>
                </div>
                
            </div>
            <div className=''>
                <PublishedDrepDown _id={_id} status={status} />
            </div>
        </div>
        <div className='col-span-12 lg:col-span-6'>
            <div>
                <h5>{title?title:"Null"}</h5>
                <div className='my-6'>
                    <p className='text-[12px]'>Product Name:<span className='text-[#0266E1]'>Music Wizard Wireless Headphone - Black</span></p>
                </div>
                <div>
                    <p className='text-[17px]'>{content?content:"Null"} <span className='font-bold'> Highly recommended</span>!</p>
                </div>
            </div>
        </div>
        <div className='col-span-12 lg:col-span-3 grid grid-cols-1 lg:content-between h-[100%] gap-4'>
            <div className=''>
                <div className='flex items-center lg:justify-end gap-2'>
                    <LuInfo className='text-[#B6B6B6]'/>
                    <p className='text-[12px] text-[#B6B6B6]'>Incentivized Review</p>
                </div>
                <div className='flex items-center lg:justify-end gap-2'>
                {rating && (
                    <>
                        {[...Array(rating)].map((e, i) => (
                            <IoIosStar key={i} className='text-[#F9C612] w-[18px] h-[18px]' />
                        ))}
                        {[...Array(countMinsStar)].map((x, i) => (
                            <IoStarOutline key={i} className='text-[#F9C612] w-[18px] h-[18px]' />
                        ))}
                    </>
                )}
                </div>
            </div>
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
                                            return <div key={c}>
                                                {
                                                    comment.status === 1 && <ListCommentsRCMdt key={c} comment={comment} _id={_id}/>
                                                }
                                            </div>
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
// status === 1
export default ReviewsCommentsMdt