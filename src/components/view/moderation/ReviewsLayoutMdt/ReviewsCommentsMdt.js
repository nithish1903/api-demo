import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { IoStarOutline } from 'react-icons/io5';
import { BiMessageSquareDetail } from "react-icons/bi";
import PublishedDrepDown from './PublishedDrepDown';
// import DotsDropDownMdt from './DotsDropDownMdt';
import WriteComments from './WriteComments';
import { Button } from '@mui/material';
import useToggle from '@/hooks/useToggle';
import { formatDateModerationReview } from '@/lib/others/timeConvertion';

const comments = [
    {
        comment:"The Men's ComfortBlend T-Shirt is a true winner. Its soft, breathable fabric and perfect fit make it my husband's go-to for everyday wear. With its durability and versatile style, it's a must-have staple for any wardrobe."
    },
    {
        comment:"The Men's ComfortBlend T-Shirt is a true winner. Its soft, breathable fabric and perfect fit make it my husband's go-to for everyday wear. With its durability and versatile style, it's a must-have staple for any wardrobe."
    },
    {
        comment:"The Men's ComfortBlend T-Shirt is a true winner. Its soft, breathable fabric and perfect fit make it my husband's go-to for everyday wear. With its durability and versatile style, it's a must-have staple for any wardrobe."
    },
    {
        comment:"The Men's ComfortBlend T-Shirt is a true winner. Its soft, breathable fabric and perfect fit make it my husband's go-to for everyday wear. With its durability and versatile style, it's a must-have staple for any wardrobe."
    },
]

const ReviewsCommentsMdt = ({user,created_at,title,content,rating}) => {
    const [showComment,setShowComment] = useState(false)
    const handleShowComment = ()=>{setShowComment(!showComment)}
    const { toggle,handleToggle } = useToggle()

  return (
    <div className='grid grid-cols-12 gap-4 px-3 lg:px-8 py-8 border-2 border-[#CFD5E1] rounded-[10px]'>
        <div className='col-span-12 lg:col-span-3 grid grid-cols-1 content-between h-[100%] gap-5 lg:gap-2'>
            <div className='flex gap-3 items-center'>
                {/* <div>
                    <Checkbox sx={{padding:"0px"}}/>
                </div> */}
                <div>
                    <h6 className='font-[700]'>{user.name}</h6>
                    <p className='text-[#bfbfbf] text-[16px]'>{formatDateModerationReview(created_at)}</p>
                    <p className='text-[12px] mt-5'>{user.email} <span className='block text-[#0266E1] font-[600]'>(View Timeline)</span></p>
                </div>
                
            </div>
            <div className=''>
                <PublishedDrepDown />
            </div>
        </div>
        <div className='col-span-12 lg:col-span-6'>
            <div>
                <h5>{title}</h5>
                <div className='my-6'>
                    <p className='text-[12px]'>Product Name:<span className='text-[#0266E1]'>Music Wizard Wireless Headphone - Black</span></p>
                </div>
                <div>
                    <p className='text-[17px]'>{content} <span className='font-bold'> Highly recommended</span>!</p>
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
                    {
                        [...Array(rating)].map((e,i)=>{
                            return <IoIosStar key={i} className='text-[#F9C612] w-[18px] h-[18px]' />
                        })
                    }
                    {
                        [...Array(5-rating)].map((x,i)=>{
                            return <IoStarOutline key={i} className='text-[#F9C612] w-[18px] h-[18px]' />
                        })
                    }
                </div>
            </div>
            <div className='flex items-center lg:justify-end gap-3 relative '>
                <button onClick={handleShowComment} className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 py-1.5 rounded-[4px]'>
                    Comments
                    <BiMessageSquareDetail className='text-[#0266E1] w-[14px] h-[14px]'/>
                </button>
                <WriteComments handleShowComment={handleShowComment} showComment={showComment} setShowComment={setShowComment}/>
                {/* <DotsDropDownMdt /> */}
            </div>
        </div>
        <div className='col-span-12'>
            <div className='mt-3'>
                <div>
                    <Button variant="text" className='text-[#0266E1]' onClick={handleToggle}>{toggle?"Hide Comments":"Show Comments"}</Button>
                </div>
                {
                    toggle && (
                        <div>
                            {
                                comments.map((comment,c)=>{
                                    return <div key={c} className='py-2 px-2 my-3 border-[1px] border-[#CFD5E1] rounded-[10px] bg-[#eeeeef]'>
                                        <p className='text-[#334851] text-[13px]'>{comment.comment}</p>
                                    </div>
                                })
                            }
                        </div>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default ReviewsCommentsMdt