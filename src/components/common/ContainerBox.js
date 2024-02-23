import React from 'react'

const ContainerBox = ({children,className}) => {
  return (
    <section className={`p-4 md:p-6 lg:px-10 bg-[#fff] rounded-[10px] ${className}`}>
        {children}
    </section>
  )
}

export default ContainerBox