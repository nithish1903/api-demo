import React from 'react'

const ContainerBox = ({children,className}) => {
  return (
    <section className={`px-4 py-6 md:py-8 lg:py-10  lg:px-5 xl:px-7  bg-[#fff] rounded-[10px] ${className}`}>
        {children}
    </section>
  )
}

export default ContainerBox