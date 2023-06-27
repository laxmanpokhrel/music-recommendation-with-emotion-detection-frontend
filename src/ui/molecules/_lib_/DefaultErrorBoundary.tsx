import Icon from '@Atoms/Icon';
import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  showError?: boolean;
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: object | null;
}

class DefaultErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
    errorInfo: null,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    if (this.props.showError === false) {
      this.state.error = null;
      this.state.errorInfo = null;
    }
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    if (this.state.errorInfo) {
      const [fileName, errorLocation] = (this.state.errorInfo as any).componentStack.split('\n ')[1].trim().split(' (');
      return (
        <div className=" flex bg-pink-200 flex-col items-center justify-center gap-1 p-4">
          <div className="title  flex flex-col justify-center items-center">
            <Icon iconName="running_with_errors" className="text-red-600 text-4xl" />
            <p className="text-gray-800 text-lg font-bold"> An Error Occurred !</p>
          </div>
          <a href={errorLocation} target="_blank" rel="noopener noreferrer" className="text-red-600 underline text-sm">
            {fileName}
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default DefaultErrorBoundary;
