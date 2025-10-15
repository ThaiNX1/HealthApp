import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { UserProvider } from './presentation/contexts/UserContext';
import { UserRepositoryImpl } from './data/repositories/UserRepositoryImpl';
import './assets/styles/index.css';

// Create repository implementation (no longer needs ApiService dependency)
const userRepository = new UserRepositoryImpl();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider userRepository={userRepository}>
      <App />
    </UserProvider>
  </React.StrictMode>
);
