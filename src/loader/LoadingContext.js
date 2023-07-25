// import React, { useContext, createContext } from 'react';

// const LoadingContext = createContext();

// export function useLoading() {
//   return useContext(LoadingContext);
// }

// export default LoadingContext;


import React, { useState, useContext, createContext } from 'react';

const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const setLoadingState = (newLoadingState) => {
    setLoading(newLoadingState);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading: setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
}
