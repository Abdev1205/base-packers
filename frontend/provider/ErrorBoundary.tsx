import React, { Component, ErrorInfo } from "react";
import * as Sentry from "@sentry/nextjs";

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state to indicate that there is an error
    console.log("error received", error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an external service like Sentry
    console.log("Error caught", error, errorInfo);
    Sentry.captureException(error, {
      extra: { componentStack: errorInfo.componentStack },
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for when an error is caught
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>We have reported the error to our team.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
