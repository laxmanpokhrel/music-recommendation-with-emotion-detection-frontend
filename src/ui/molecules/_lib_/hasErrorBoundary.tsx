import React from 'react';
import ErrorBoundary from './DefaultErrorBoundary';

function hasErrorBoundary<T extends { [key: string]: any }>(WrappedComponent: React.FC<T> | React.ComponentClass<T>) {
  return function ErrorBoundaryWrapper(props: T) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default hasErrorBoundary;
