// HeaderContext.js
"use client"
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');

  const goBack = () => {
    router.back();
  };

  return (
    <HeaderContext.Provider value={{ pageTitle, setPageTitle, goBack }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
