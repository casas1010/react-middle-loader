// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { LoadingScreen } from './loader/LoadingScreen';
// import LoadingContext from './loader/LoadingContext'; 
// import reportWebVitals from './reportWebVitals';

// const RootComponent = () => {
//   const [loading, setLoading] = useState(false);

//   const showLoader = () => {
//     setLoading(true);
//   };

//   const hideLoader = () => {
//     setLoading(false);
//   };

//   return (
//     <LoadingContext.Provider value={{ loading, showLoader, hideLoader }}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//       <LoadingScreen />
//     </LoadingContext.Provider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RootComponent />);
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadingScreen } from './loader/LoadingScreen';
import { LoadingProvider } from './loader/LoadingContext'; // Update the import here
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from './snack-bar/SnackBarContext';
import { Snackbar } from './snack-bar/SnackBar';

const RootComponent = () => {
  return (
    <LoadingProvider>
      <SnackbarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <LoadingScreen />
        <Snackbar /> 

      </SnackbarProvider>

    </LoadingProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
reportWebVitals();
