import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login.tsx';  // Import the desired component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />  {/* Render the Login component instead of App */}
  </React.StrictMode>,
);
