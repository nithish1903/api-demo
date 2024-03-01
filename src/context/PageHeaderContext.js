// PageHeaderContext.js
"use client"
import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react';

const PageHeaderContext = createContext();

export const PageHeaderProvider = ({ children }) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');

  const goBack = () => {
    router.back();
  };

  return (
    <PageHeaderContext.Provider value={{ pageTitle, setPageTitle, goBack, reviewTitle,setReviewTitle }}>
      {children}
    </PageHeaderContext.Provider>
  );
};

export const userPageHeader = () => useContext(PageHeaderContext);
