import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

// Casino Card Loading Skeleton
export function CasinoCardSkeleton() {
  return (
    <Card className="p-6">
      <CardHeader className="pb-3 p-0">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-muted rounded-lg">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-3 w-3 rounded-full" />
            ))}
          </div>
        </div>
        
        <Skeleton className="h-6 w-32 mt-4" />
        
        <div className="flex flex-wrap gap-1 mt-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </CardHeader>

      <CardContent className="pt-0 p-0">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-3 w-2/3 mx-auto" />
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Skeleton className="flex-1 h-9" />
          <Skeleton className="flex-1 h-9" />
        </div>
      </CardContent>
    </Card>
  );
}

// Casino Table Loading Skeleton
export function CasinoTableSkeleton() {
  return (
    <Card className="p-6">
      <CardHeader className="p-0 mb-6">
        <Skeleton className="h-8 w-48 mb-4" />
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-16" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 p-4 border-b">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-18" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Table Rows */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b">
            <div className="flex items-center gap-3">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-24" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="h-3 w-3 rounded-full" />
              ))}
            </div>
            <div className="flex gap-1">
              <Skeleton className="h-5 w-12 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Page Loading Skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-6 w-24 mx-auto mb-6" />
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-28" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mx-auto mb-8" />
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-6">
                <div className="w-12 h-12 bg-muted rounded-full mb-4">
                  <Skeleton className="w-full h-full rounded-full" />
                </div>
                <Skeleton className="h-6 w-32 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline Loading Spinner
export function LoadingSpinner({ size = 'default', className = '' }: { size?: 'small' | 'default' | 'large', className?: string }) {
  const sizeClasses = {
    small: 'h-4 w-4',
    default: 'h-6 w-6',
    large: 'h-8 w-8'
  };

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
}

// Search Loading State
export function SearchLoadingState() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-3 text-muted-foreground">
        <LoadingSpinner />
        <span className="text-sm">Söker casinon...</span>
      </div>
    </div>
  );
}

// Filter Loading Overlay
export function FilterLoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
      <div className="flex items-center gap-3 text-muted-foreground">
        <LoadingSpinner />
        <span className="text-sm font-medium">Uppdaterar filter...</span>
      </div>
    </div>
  );
}

// Content Loading Placeholder
export function ContentLoadingPlaceholder({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
        />
      ))}
    </div>
  );
}

// Image Loading Placeholder
export function ImageLoadingPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-muted animate-pulse flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 bg-muted-foreground/20 rounded" />
    </div>
  );
}

// Button Loading State
export function ButtonLoadingState({ children, loading = false, ...props }: any) {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? (
        <div className="flex items-center gap-2">
          <LoadingSpinner size="small" />
          <span>Laddar...</span>
        </div>
      ) : children}
    </button>
  );
}