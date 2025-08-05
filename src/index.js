import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function ErrorFallback({ error }) {
  return (
    <div className="p-8 text-center">
      <h1 className="text-red-500 text-3xl font-bold">Something went wrong!</h1>
      <pre className="mt-4 text-sm text-gray-300">{error.message}</pre>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
