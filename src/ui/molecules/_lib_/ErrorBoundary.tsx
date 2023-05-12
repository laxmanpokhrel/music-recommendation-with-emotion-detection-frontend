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

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };

    if (this.props.showError === false) {
      this.state.error = null;
      this.state.errorInfo = null;
    }
  }

  componentDidCatch = (error: Error, info: object) => {
    this.setState({ error, errorInfo: info });
    const splittedMessage = (info as any).componentStack.split('\n ')[1].trim().split(' (');
    console.log('info', splittedMessage[0]);
    console.log('info stack', (info as any).componentStack.toString());
  };

  render() {
    if (this.state.errorInfo) {
      const [fileName, errorLocation] = (this.state.errorInfo as any).componentStack.split('\n ')[1].trim().split(' (');
      // console.log('😎 - file: ErrorBoundary.tsx:24 - x:', x.length);

      return (
        <div className=" naxatw-flex naxatw-bg-pink-200 naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-1 naxatw-p-4">
          <div className="title  naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-items-center">
            <Icon iconName="running_with_errors" style="naxatw-text-red-600 naxatw-text-4xl" />
            <p className="naxatw-text-gray-800 naxatw-text-lg naxatw-font-bold"> An Error Occurred !</p>
          </div>
          <a
            href={errorLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="naxatw-text-red-600 naxatw-underline naxatw-text-sm"
          >
            {fileName}
          </a>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
