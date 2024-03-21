import React from 'react'

const ReviewsBoxDB = () => {

    const reviews = [
        {
            value:"N/A",
            label:"Reviews",
            allTime:0,
            active:true,
        },
        {
            value:"N/A",
            label:"Average Star Rating",
            allTime:0,
            active:false,
        },
        {
            value:"N/A",
            label:"Order To Review",
            allTime:0,
            active:false,
        },
    ]
  return (
    <div className='grid grid-cols-12 gap-2'>
        {
            reviews.map((review,r)=>{
                return <div className='col-span-12 md:col-span-6 lg:col-span-4 mt-6' key={r}>
                <div className={`p-2 border-2  ${review.active?"bg-[#0266E1] border-[#0266E1]":"bg-[#fff] border-[#CFD5E1]"} rounded-[4px]`}>
                    <h2 className={`text-[40px] font-[700] ${review.active&&"text-[#fff]"}`}>{review.value}</h2>
                    <div className='flex items-center justify-between'>
                        <h5 className={`font-[700] text-[10px] ${review.active&&"text-[#fff]"}`}>{review.label}</h5>
                        <div className='border-[#CFD5E1] border-2 p-[4px] rounded-[4px] bg-[#fff]'>
                            <p className='m-0 text-[10px]'>All Time: 0</p>
                        </div>
                    </div>
                </div>
            </div>
            })
        }
    </div>
  )
}

export default ReviewsBoxDB