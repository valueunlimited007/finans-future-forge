import React, { useEffect } from 'react';

interface OffersContainerProps {
  category: string;
  limit?: number;
  title?: string;
  className?: string;
}

const OffersContainer: React.FC<OffersContainerProps> = ({ 
  category, 
  limit = 5, 
  title,
  className = "" 
}) => {
  useEffect(() => {
    // Trigger offers re-render on component mount and when limit changes
    console.log('[OffersContainer] Component mounted/updated, triggering fg:offers-updated');
    const event = new CustomEvent('fg:offers-updated');
    document.dispatchEvent(event);
  }, [limit]); // Add limit as dependency

  return (
    <div className={className}>
      {title && <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>}
      <div 
        data-offers 
        data-category={category} 
        data-limit={limit}
        className="offers-container"
        key={`${category}-${limit}`} // Force re-render when limit changes
      >
        <p className="text-center text-muted-foreground">Laddar erbjudanden...</p>
      </div>
    </div>
  );
};

export default OffersContainer;