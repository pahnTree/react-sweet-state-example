import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './components/App';

const container = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./tests/mocks/browser')
  worker.start()
}

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
