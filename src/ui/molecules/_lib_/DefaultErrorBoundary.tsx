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
        <div className=" laxutw-flex laxutw-bg-pink-200 laxutw-flex-col laxutw-items-center laxutw-justify-center laxutw-gap-1 laxutw-p-4">
          <div className="title  laxutw-flex laxutw-flex-col laxutw-justify-center laxutw-items-center">
            <Icon iconName="running_with_errors" className="laxutw-text-red-600 laxutw-text-4xl" />
            <p className="laxutw-text-gray-800 laxutw-text-lg laxutw-font-bold"> An Error Occurred !</p>
          </div>
          <a
            href={errorLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="laxutw-text-red-600 laxutw-underline laxutw-text-sm"
          >
            {fileName}
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default DefaultErrorBoundary;
