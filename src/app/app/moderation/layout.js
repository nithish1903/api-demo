
import { ReviewsFilterProvider } from '@/context/ReviewsFilterContext'
import React, { Fragment } from 'react'

const layout = ( {children}) => {
  return (
    <Fragment>
      <ReviewsFilterProvider>
        {children}
      </ReviewsFilterProvider>
    </Fragment>
  )
}

export default layout