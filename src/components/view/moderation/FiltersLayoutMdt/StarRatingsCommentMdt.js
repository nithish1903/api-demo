import React from 'react'

import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";

import { Checkbox, Radio } from '@mui/material';
import Label from '@/components/common/Label';
import { useReviewsFilter } from '@/context/ReviewsFilterContext';
import { useSelector } from 'react-redux';


const StarRatingsCommentMdt = () => {
    const { reviewFilter , handleStar_ratings , handleMedia,handleComments }  = useReviewsFilter()

    const {moderationData,isLoading,isSuccess,isError,errorMessage} = useSelector((state)=>{
        return state.moderation
    })
    const presentData  = isSuccess && moderationData && Object.keys(moderationData).length>0 && moderationData.data && Object.keys(moderationData.data).length>0 && moderationData.data 

    console.log(presentData && presentData)
    console.log("presentData && presentData")

  return (
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-12'>
                <h6 className='font-[700]'>{ reviewFilter.content_type !== "product_question_answers" ? "Star Ratings" : " Media & Comments"  }</h6>
            </div>
            {
                reviewFilter.content_type !== "product_question_answers" && (
                    <div className='col-span-12'>
                        <div className='flex items-start justify-between mb-1'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Checkbox sx={{padding:"0px"}} checked={reviewFilter.star_ratings.includes(5)} onChange={()=>{handleStar_ratings(5)}}/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                                <p className='text-[12px] font-[700] text-[#fff]'>{presentData && presentData.ratings_counts ? (presentData.ratings_counts["5"] ? presentData.ratings_counts["5"] : 0) : 0 }</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between mb-1'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Checkbox sx={{padding:"0px"}} checked={reviewFilter.star_ratings.includes(4)} onChange={()=>{handleStar_ratings(4)}} />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                                <p className='text-[12px] font-[700] text-[#fff]'>{presentData && presentData.ratings_counts ? (presentData.ratings_counts["4"] ? presentData.ratings_counts["4"] : 0) : 0 }</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between mb-1'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Checkbox sx={{padding:"0px"}} checked={reviewFilter.star_ratings.includes(3)} onChange={()=>{handleStar_ratings(3)}}/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                                <p className='text-[12px] font-[700] text-[#fff]'>{presentData && presentData.ratings_counts ? (presentData.ratings_counts["3"] ? presentData.ratings_counts["3"] : 0) : 0 }</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between mb-1'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Checkbox sx={{padding:"0px"}} checked={reviewFilter.star_ratings.includes(2)} onChange={()=>{handleStar_ratings(2)}}/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                                <p className='text-[12px] font-[700] text-[#fff]'>{presentData && presentData.ratings_counts ? (presentData.ratings_counts["2"] ? presentData.ratings_counts["2"] : 0) : 0 }</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between mb-1'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Checkbox sx={{padding:"0px"}} checked={reviewFilter.star_ratings.includes(1)} onChange={()=>{handleStar_ratings(1)}}/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoIosStar className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                    <IoStarOutline className='text-[#F9C612] w-[18px] h-[18px]' />
                                </div>
                            </div>
                            <div className='inline-block bg-[#0266E1] px-1.5 py-1 rounded-[20px]'>
                                <p className='text-[12px] font-[700] text-[#fff]'>{presentData && presentData.ratings_counts ? (presentData.ratings_counts["1"] ? presentData.ratings_counts["1"] : 0 ) : 0}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='col-span-12'>
                <h6 className='text-[16px] font-[700]'>Media</h6>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='Photos' sx={{padding:"0px"}} checked={reviewFilter.media.includes("image")} value={"image"} onChange={(e)=>{handleMedia(e.target.value)}} />
                    <Label label={"Photos"} htmlFor={"Photos"}  />
                </div>
            </div>
            {/* <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                    <Checkbox id='Videos' sx={{padding:"0px"}}/>
                    <Label label={"Videos"} htmlFor={"#Videos"}  />
                </div>
            </div> */}
            <div className='col-span-12'>
                <h6 className='text-[16px] font-[700]'>Comments</h6>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-1'>
                    <Radio sx={{padding:"0px"}}  checked={reviewFilter.comments} onChange={()=>{handleComments(true)}} id='WithResponse' name='Comments'  />
                    <Label label={"With Response"} htmlFor={"WithResponse"}  />
                </div>
            </div>
            <div className='col-span-6'>
                <div className='flex items-center gap-1'>
                    <Radio sx={{padding:"0px"}} checked={!reviewFilter.comments} onChange={()=>{handleComments(false)}} id='WithoutResponse' name='Comments'  />
                    <Label label={"Without Response"} htmlFor={"WithoutResponse"}/>
                </div>
            </div>
        </div>
  )
}

export default StarRatingsCommentMdt