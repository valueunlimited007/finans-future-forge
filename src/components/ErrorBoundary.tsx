import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorFallback onReset={() => this.setState({ hasError: false })} />;
    }

    return this.props.children;
  }
}

// Default Error Fallback Component
export function ErrorFallback({ onReset }: { onReset?: () => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-xl">Något gick fel</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Ett oväntat fel inträffade. Vänligen försök igen eller kontakta support om problemet kvarstår.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {onReset && (
              <Button onClick={onReset} className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Försök igen
              </Button>
            )}
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Gå till startsidan
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Network Error Component
export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return (
    <Card className="p-6 text-center">
      <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Anslutningsproblem</h3>
      <p className="text-muted-foreground mb-4">
        Det gick inte att ladda innehållet. Kontrollera din internetanslutning.
      </p>
      {onRetry && (
        <Button onClick={onRetry} className="flex items-center gap-2 mx-auto">
          <RotateCcw className="h-4 w-4" />
          Försök igen
        </Button>
      )}
    </Card>
  );
}

// Not Found Component  
export function NotFoundError({ 
  title = "Sidan hittades inte", 
  description = "Den sida du letar efter existerar inte eller har flyttats.",
  showHomeButton = true 
}: { 
  title?: string; 
  description?: string; 
  showHomeButton?: boolean; 
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-muted-foreground/20 mb-4">404</div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        {showHomeButton && (
          <Button asChild>
            <Link to="/" className="flex items-center gap-2 mx-auto w-fit">
              <Home className="h-4 w-4" />
              Tillbaka till startsidan
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

// Empty State Component
export function EmptyState({ 
  icon: Icon = AlertTriangle,
  title = "Inga resultat", 
  description = "Inga objekt matchade dina sökkriterier.",
  action
}: { 
  icon?: React.ElementType;
  title?: string; 
  description?: string; 
  action?: ReactNode;
}) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 max-w-sm mx-auto">{description}</p>
      {action}
    </div>
  );
}

// Loading Error Component (for failed data fetching)
export function LoadingError({ onRetry, error }: { onRetry?: () => void; error?: string }) {
  return (
    <Card className="p-6 text-center border-red-200 dark:border-red-800">
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Fel vid laddning</h3>
      <p className="text-muted-foreground mb-4">
        {error || "Det gick inte att ladda data. Försök igen senare."}
      </p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Försök igen
        </Button>
      )}
    </Card>
  );
}

export default ErrorBoundary;