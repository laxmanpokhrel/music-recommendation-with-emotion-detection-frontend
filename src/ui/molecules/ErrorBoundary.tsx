import React, { useState, useEffect } from 'react';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

function ErrorBoundary(props: IErrorBoundaryProps): JSX.Element {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    function handleError(): void {
      setHasError(true);
    }

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  function componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('😎 - file: ErrorBoundary.tsx - error:', error);
    console.log('😎 - file: ErrorBoundary.tsx - errorInfo:', errorInfo);
    setHasError(true);
  }

  if (hasError) {
    return <h1>There is an error</h1>;
  }

  return props.children;
}

export default ErrorBoundary;
