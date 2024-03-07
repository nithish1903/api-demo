import React from 'react'

import FilterSearchMdt from './FiltersLayoutMdt/FilterSearchMdt';
import AdvancedFiltersMdt from './FiltersLayoutMdt/AdvancedFiltersMdt';
import StarRatingsCommentMdt from './FiltersLayoutMdt/StarRatingsCommentMdt';


const FiltersLayoutMdt = () => {
  return (
    <div className='grid grid-cols-12 gap-4 items-stretch '>
      <div className='col-span-12 lg:col-span-4 xl:col-span-3'>
        <FilterSearchMdt />
      </div>
      <div className='col-span-12 lg:col-span-4 xl:col-span-5 mt-10 lg:mt-0'>
        <AdvancedFiltersMdt />
      </div>
      <div className='col-span-12 lg:col-span-4 xl:col-span-4 mt-10 lg:mt-0'>
        <StarRatingsCommentMdt />
      </div>
    </div>
  )
}

export default FiltersLayoutMdt