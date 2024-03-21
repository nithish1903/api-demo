import React from 'react'


import { TiArrowSortedDown } from 'react-icons/ti'
// import { ArrowRight } from '@mui/icons-material';
import { IoMdArrowRoundUp } from 'react-icons/io';
import axios from 'axios';
import useAPi from '@/hooks/useApi';
import { ErrorSnackbar, SuccessSnackbars } from '@/components/common/Snackbars';
import { useReviewsFilter } from '@/context/ReviewsFilterContext';
import { useDispatch } from 'react-redux';
import { moderationActionPost } from '@/lib/redux/features/moderation/moderationAction';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import baseURL from '@/lib/others/baseURL';


const othernested = [
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            const response  = await axios.post(`${baseURL}/v1/shopify/publish-review`,data ,{withCredentials: true} )
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
        <button 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='flex items-center gap-3 justify-center border-2 border-[#CFD5E1] px-2 rounded-[4px]'
        >
            <span className='w-[14px] h-[14px] bg-[#0266E1] text-[#fff] rounded-full flex items-center justify-center'><IoMdArrowRoundUp /></span>
                Published
            <TiArrowSortedDown className=''/>
        </button> 
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {
                (status === "rejected") && (
                    <MenuItem onClick={handleClose}>
                        <div className='my-1 mx-3 w-full block  '>
                            <div className='flex items-center' onClick={()=>{handleApiCall("approved")}}>
                            Publish
                            </div>
                        </div>
                    </MenuItem>
                )
            }
            {
                (status === "approved") && (
                    <MenuItem onClick={handleClose}>
                        <div className='my-1 mx-3 w-full block  '>
                            <div className='flex items-center' onClick={()=>{handleApiCall("rejected")}}>
                                Reject
                            </div>
                        </div>
                    </MenuItem>
                )
            }
            {
                (status === "pending") && (
                    <MenuItem onClick={handleClose}>
                        <div className='my-1 mx-3 w-full block  '>
                            <div className='flex items-center' onClick={()=>{handleApiCall("approved")}}>
                                Publish
                            </div>
                        </div>
                    </MenuItem>
                )
            }
            {
                (status === "pending") && (
                    <MenuItem onClick={handleClose}>
                        <div className='my-1 mx-3 w-full block  '>
                            <div className='flex items-center' onClick={()=>{handleApiCall("rejected")}}>
                                Reject
                            </div>
                        </div>
                    </MenuItem>
                )
            }
        </Menu>
        
    </>
  )
}

export default PublishedDrepDown