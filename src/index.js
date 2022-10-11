import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TempContextProvider } from './context/TempContext';
import { PlaceContextProvider } from './context/PlaceContext';
import { CardLocationContextProvider } from './context/CardLocationContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CardLocationContextProvider>
    <PlaceContextProvider>
    <TempContextProvider>
    <App />
    </TempContextProvider>
    </PlaceContextProvider>
  </CardLocationContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
