"use client"

import { Provider } from "react-redux";
import store from "@/lib/redux/store";
import React from 'react'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider