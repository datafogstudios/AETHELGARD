import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 bg-[#F9F7F2]">
          <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-[3rem] shadow-xl text-center border border-gray-200">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
               <AlertTriangle size={32} />
            </div>
            <h2 className="text-2xl font-bold font-serif text-[#1A1A1A] mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-8 font-medium">An unexpected error occurred while loading this content. Please try refreshing.</p>
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-[#002B5B] text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#153e77] transition-all shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]"
            >
              <span className="flex items-center justify-center gap-2"><RefreshCcw size={16} /> Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}
