"use client"
import React, { createContext, useContext, useState } from 'react'

const ReviewsFilterContext = createContext()

const ReviewsFilterProvider = ({children}) => {
    const [reviewFilter, setReviewFilter] = useState(
        {
            "start_date": "", // it can be empty
            "end_date": "", // it can be empty
            "search_keyword": "", // it can be empty
            "content_type": "product_reviews", // product_reviews, site_reviews, product_question_answers
            "status": "", // pending, approved, rejected, trash
            "star_ratings": [], // [1,2,3,4,5]
            "media": [], // ['image','video']
            "comments": false, // true/false
            "sort": "oldest" //oldest, newest, highestRating,lowestRating
        }
      );

      const handleTimeRange = (start_date,end_date)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            start_date,
            end_date,
        }))
      }
      const handleSearch_keyword = (value)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            ["search_keyword"]:value
        }))
      }
      const handleContent_type= (value)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            ["content_type"]:value
        }))
      }
      const handleStatus = (value)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            ["status"]:value
        }))
      }
      const handleStar_ratings = (value) => {
        setReviewFilter((prevFilter) => {
          const updatedStarRatings = [...prevFilter.star_ratings];
          const index = updatedStarRatings.indexOf(value);
          if (index !== -1) {
            updatedStarRatings.splice(index, 1);
          } else {
            if (value >= 1 && value <= 5) {
              updatedStarRatings.push(value);
            }
          }
          return {
            ...prevFilter,
            star_ratings: updatedStarRatings,
          };
        });
      };
      const handleMedia = (value)=>{
        setReviewFilter((prevFilter) => {
            const updateMedia = [...prevFilter.media];
            const index = updateMedia.indexOf(value);
            if (index !== -1) {
                updateMedia.splice(index, 1);
            } else {
                updateMedia.push(value);
            }
            return {
              ...prevFilter,
              media:updateMedia,
            };
          });
      }
      const handleComments = (value)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            ["comments"]:value
        }))
      }
      const handleSort = (value)=>{
        setReviewFilter((preValue)=>({
            ...preValue,
            ["sort"]:value
        }))
      }

      const contextValue = {
        reviewFilter,
        handleTimeRange,
        handleSearch_keyword,
        handleContent_type,
        handleStatus,
        handleStar_ratings,
        handleMedia,
        handleComments,
        handleSort
    }
  return (
    <ReviewsFilterContext.Provider value={contextValue}>{children}</ReviewsFilterContext.Provider>
  )
}

const useReviewsFilter = ()=>{
    return useContext(ReviewsFilterContext)
}

export { ReviewsFilterProvider , useReviewsFilter}