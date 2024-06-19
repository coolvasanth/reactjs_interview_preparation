// What is error boundary in react give an example
/**
 * Imagine you're building a complex React application
 *  with multiple components. Everything works smoothly 
 * until suddenly, an error crashes the entire app, 
 * leaving a frustrating blank screen for users. 
 * This is where error boundaries come in as lifesavers.
 */

import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  const handleError = () => {
    setError('Something went wrong!');
  };

  return (
    <>
      {error ? (
        <div>Error: {error}</div> // Fallback UI
      ) : (
        children
      )}
    </>
  );
}

function ChildComponent() {
  useEffect(() => {
    // Simulate an error
    throw new Error('This is an error!');
  }, []);

  return <div>This is the child component.</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <ChildComponent />
    </ErrorBoundary>
  );
}

export default App;
