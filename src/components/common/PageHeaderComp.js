"use client"
import React from 'react'
import { usePageHeader } from "@/context/PageHeaderContext";

const PageHeaderComp = ({title,review}) => {
    
    const { setPageTitle ,setReviewTitle } = usePageHeader();

    React.useEffect(() => {
        setPageTitle(title);
        setReviewTitle(review)
    }, [title,review,setPageTitle ,setReviewTitle]);

  return (
    <></>
  )
}

export default PageHeaderComp