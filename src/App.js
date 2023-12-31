import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLoading } from './loader/LoadingContext';
import { useSnackbar } from './snack-bar/SnackBarContext'; // Add this import

function App() {
  const { setLoading } = useLoading();
  const { showSnackbar } = useSnackbar(); // Add this hook




  const simulateAsyncProcess = () => {
    setLoading(true); // Display the loader before the async operation starts

    // Simulate some async operation, for example, an API call
    setTimeout(() => {
      setLoading(false); // Hide the loader after the async operation is completed
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={simulateAsyncProcess}>Simulate Async Process</button>
        <button onClick={() => showSnackbar('Process completed successfully!', 'green', 3000)}>Snackbar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
