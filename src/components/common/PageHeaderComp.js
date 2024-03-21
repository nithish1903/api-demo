"use client"
import React from 'react'
import { userPageHeader } from "@/context/PageHeaderContext";

const PageHeaderComp = ({title,review}) => {
    
    const { setPageTitle ,setReviewTitle } = userPageHeader();

    React.useEffect(() => {
        setPageTitle(title);
        setReviewTitle(review)
    }, [title,review]);

  return (
    <></>
  )
}

export default PageHeaderComp