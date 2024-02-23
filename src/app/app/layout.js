import AppLayout from '@/components/layouts/MainLayout/AppLayout'
import React, { Fragment } from 'react'

const layout = ({children}) => {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  )
}

export default layout