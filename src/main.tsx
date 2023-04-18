import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LinearProgress } from '@mui/material';
import './i18next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<LinearProgress color="secondary" />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
