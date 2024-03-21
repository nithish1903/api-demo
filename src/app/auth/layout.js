
import React, { Fragment, Suspense } from 'react'
import LoadingComp from '../loading'

const layout = ({children}) => {
  return (
    <Suspense fallback={<LoadingComp />}>
      <div className="bg-[#F3F5F8] bg-[url('/assets/images/login/hero-bg.svg')] bg-no-repeat bg-origin-border bg-center bg-auto">
        {children}
      </div>
    </Suspense>
  )
}

export default layout