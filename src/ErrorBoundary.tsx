import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', minHeight: '100vh', background: '#f0f0f0', direction: 'rtl', textAlign: 'right' }}>
          <h1 style={{ color: '#000', fontSize: '32px', marginBottom: '20px' }}>
            שגיאה בטעינת הדף
          </h1>
          <p style={{ color: '#000', fontSize: '18px', marginBottom: '10px' }}>
            {this.state.error?.message || 'שגיאה לא ידועה'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              background: '#0066FF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            רענן את הדף
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

