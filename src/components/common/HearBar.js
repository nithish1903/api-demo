"use client"
import React from 'react'
import { useHeader } from "@/context/HeaderContext";

const HearBar = ({title,review}) => {
    
    const { setPageTitle ,setReviewTitle } = useHeader();

    React.useEffect(() => {
        setPageTitle(title);
        setReviewTitle(review)
    }, [title,review]);

  return (
    <></>
  )
}

export default HearBar