import React, { useState, useContext, createContext } from 'react';

const SnackbarContext = createContext();

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState(null);

  const showSnackbar = (message, severity, duration) => {
    setSnackbar({ message, severity, duration });
    setTimeout(() => {
      hideSnackbar();
    }, duration);
  };

  const hideSnackbar = () => {
    setSnackbar(null);
  };

  return (
    <SnackbarContext.Provider value={{ snackbar, showSnackbar, hideSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
}
