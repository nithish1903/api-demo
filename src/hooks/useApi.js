import { useState } from 'react'

const useAPi = (initialValue = false) => {
  const [isLoading, setIsLoading] = useState(initialValue)

  const [isSuccess,setIsSuccess] = useState(false)
  const [successMessage,setSuccessMessage] = useState(null)

  const [isError,setIsError] = useState(false)
  const [errorMessage,setErrorMessage] = useState(null)

  const handleLoading = () => setIsLoading(!isLoading)

  const setLoadingTrue = () => setIsLoading(true)
  const setLoadingFalse = () => setIsLoading(false)

  const setIsErrorTrue = () => setIsError(true)
  const setIsErrorFalse = () => setIsError(false)


  const setIsSuccessTrue = () => setIsSuccess(true)
  const setIsSuccessFalse = () => setIsSuccess(false)

  return {

    isLoading,
    handleLoading,
    setLoadingTrue,
    setLoadingFalse,

    errorMessage,
    setErrorMessage,

    isError,
    setIsError,
    setIsErrorTrue,
    setIsErrorFalse,

    isSuccess,
    setIsSuccess,
    setIsSuccessTrue,
    setIsSuccessFalse,
    
    successMessage,
    setSuccessMessage,
  }
}

export default useAPi