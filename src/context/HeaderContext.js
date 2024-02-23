// HeaderContext.js
"use client"
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');

  const goBack = () => {
    router.back();
  };

  return (
    <HeaderContext.Provider value={{ pageTitle, setPageTitle, goBack, reviewTitle,setReviewTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
