import React from 'react'

const Container = ({children,className}) => {
  return (
    <section className={`container mx-auto px-4 lg:px-0 ${className}`}>
        {children}
    </section>
  )
}

export default Container