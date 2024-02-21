import Container from '@/components/common/Container'
import React, { Fragment } from 'react'

const layout = ({children}) => {
  return (
    <div className="bg-[#F3F5F8] bg-[url('/assets/images/login/hero-bg.svg')] bg-no-repeat bg-origin-border bg-center bg-auto">
      {children}
    </div>
  )
}

export default layout