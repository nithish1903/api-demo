import React from 'react'
import dynamic from "next/dynamic";

const AppLayout = dynamic(
  () => import('@/components/layouts/MainLayout/AppLayout'),
  {
    ssr: false,
  }
);

const layout = ({children}) => {
  return (
    <AppLayout>
        {children}
    </AppLayout>
  )
}

export default layout