import React from 'react';
import { useHeader } from '@/context/HeaderContext';

const LayoutHeader = () => {
  const { pageTitle, goBack } = useHeader();

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h1>{pageTitle}</h1>
    </div>
  );
};

export default LayoutHeader;
