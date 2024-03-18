import React from 'react'

import { Dropdown, DropdownMenuItem,DropdownNestedMenuItem } from '@/components/common/DropdownCustom';

import { TiArrowSortedDown } from 'react-icons/ti'
// import { ArrowRight } from '@mui/icons-material';
import { IoMdArrowRoundUp } from 'react-icons/io';
import axios from 'axios';
import useAPi from '@/hooks/useApi';
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars';
import { useReviewsFilter } from '@/context/ReviewsFilterContext';
import { useDispatch } from 'react-redux';
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction';
// import { AiOutlineDelete } from 'react-icons/ai';
// import Link from 'next/link';

// const nestedMenu = [
//     {
//         lable:"Rejected",
//         icon: ()=><AiOutlineDelete />,
//         link:"",
//         nested:[
//             {
//                 lable:"Legal transgression",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Profanity / Inappropriate",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Foreign language",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Contains private information",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Unrelated to the product or service",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"False or misleading",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Fake",
//                 icon: ()=>{},
//                 link:"",
//             },
//             {
//                 lable:"Other (Write your own)",
//                 icon: ()=>{},
//                 link:"",
//             },
//         ]
//     },
// ]

// let nested =[
//     {
//         lable:"Legal transgression",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Profanity / Inappropriate",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Foreign language",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Contains private information",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Unrelated to the product or service",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"False or misleading",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Fake",
//         icon: ()=>{},
//         link:"",
//     },
//     {
//         lable:"Other (Write your own)",
//         icon: ()=>{},
//         link:"",
//     },
// ]


const othernested = [
    // {
    //     lable:"Select",
    //     icon: ()=>{},
    //     link:"",
    //     nested:[]
    // },
    {
        lable:"Publish",
        value:"approved",
        icon: ()=>{},
        link:"",
        nested:[]
    },
    {
        lable:"Reject",
        value:"rejected",
        icon: ()=>{},
        link:"",
        nested:[]
    },
]

const PublishedDrepDown = ({_id,status}) => {

    const dipatch = useDispatch()

    const {reviewFilter} = useReviewsFilter()

    const { 
        isLoading,
        setLoadingFalse,
        setLoadingTrue ,

        isError,
        setIsErrorTrue , 
        setIsErrorFalse,

        errorMessage,
        setErrorMessage ,

        isSuccess,
        setIsSuccessTrue,
        setIsSuccessFalse,

        successMessage,
        setSuccessMessage,
    } = useAPi()

    const handleApiCall = (value)=>{
        const data = {
            "id": _id, // document_d
            "status": value, //  pending, approved, rejected, trash
            "content_type": reviewFilter.content_type // product_reviews, site_reviews, product_question_answers
        }
        handlePublishedReview(data)
    }

    const handlePublishedReview = async (data)=>{
        try {
            setLoadingTrue()
            const response  = await axios.post("http://localhost:9024/v1/shopify/publish-review",data ,{withCredentials: true} )
            const resData = response.data
            if(response.status === 200 && resData.data && resData.statuscode === 200 ){
                setIsSuccessTrue()
                setSuccessMessage(resData.data)
                dipatch(moderationActionPost(reviewFilter))
            }
            setLoadingFalse()
        } catch (error) {
            setErrorMessage(error && error.response && error.response.data && error.response.data.message)
            setIsErrorTrue()
            setLoadingFalse()
        }
    }

    // // // status = rejected , pending  , approved 
    
  return (
    <>
        <ErrorSnackbar open={isError} handleCloseSnack={setIsErrorFalse} message={errorMessage}/>
        <SuccessSnackbars open={isSuccess} handleCloseSnack={setIsSuccessFalse} message={successMessage} />
        <Dropdown
                className=" overflow-scroll w-[100%] "
                trigger={<button className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 rounded-[4px]'>
                <span className='w-[14px] h-[14px] bg-[#0266E1] text-[#fff] rounded-full flex items-center justify-center'><IoMdArrowRoundUp /></span>
                    Published
                <TiArrowSortedDown className=''/>
            </button>}
                menu={[
                    <div>
                        {
                            (status === "rejected") && (
                                <DropdownMenuItem>
                                    <div className='my-1 mx-3 w-full block  '>
                                        <div className='flex items-center' onClick={()=>{handleApiCall("approved")}}>
                                        Publish
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            )
                        }
                    </div>,
                    <div>
                        {
                            (status === "approved") && (
                                <DropdownMenuItem>
                                    <div className='my-1 mx-3 w-full block  '>
                                        <div className='flex items-center' onClick={()=>{handleApiCall("rejected")}}>
                                            Reject
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            )
                        }
                    </div>,
                    <div>
                        {
                            (status === "pending") && (
                                <DropdownMenuItem>
                                    <div className='my-1 mx-3 w-full block  '>
                                        <div className='flex items-center' onClick={()=>{handleApiCall("approved")}}>
                                            Publish
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            )
                        }
                    </div>,
                    <div>
                        {
                            (status === "pending") && (
                                <DropdownMenuItem>
                                    <div className='my-1 mx-3 w-full block  '>
                                        <div className='flex items-center' onClick={()=>{handleApiCall("rejected")}}>
                                            Reject
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            )
                        }
                    </div>,     
                ]}
                />
    </>
  )
}

export default PublishedDrepDown