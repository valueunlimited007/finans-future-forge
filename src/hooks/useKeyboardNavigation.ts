import { useEffect, useRef, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onActivate?: (index?: number) => void;
  trapFocus?: boolean;
  focusOnOpen?: boolean;
}

export function useKeyboardNavigation({
  isOpen,
  onClose,
  onNavigate,
  onActivate,
  trapFocus = true,
  focusOnOpen = true
}: UseKeyboardNavigationProps) {
  const containerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  // Store the previously focused element when opening
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      
      if (focusOnOpen && containerRef.current) {
        // Focus first focusable element or container itself
        const firstFocusable = getFocusableElements(containerRef.current)[0];
        if (firstFocusable) {
          setTimeout(() => (firstFocusable as HTMLElement).focus(), 50);
        } else {
          containerRef.current.focus();
        }
      }
    } else {
      // Restore focus when closing
      if (previousActiveElement.current && 'focus' in previousActiveElement.current) {
        (previousActiveElement.current as HTMLElement).focus();
      }
    }
  }, [isOpen, focusOnOpen]);

  // Handle keyboard events
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose();
        break;

      case 'ArrowUp':
        event.preventDefault();
        onNavigate?.('up');
        break;

      case 'ArrowDown':
        event.preventDefault();
        onNavigate?.('down');
        break;

      case 'ArrowLeft':
        event.preventDefault();
        onNavigate?.('left');
        break;

      case 'ArrowRight':
        event.preventDefault();
        onNavigate?.('right');
        break;

      case 'Enter':
      case ' ':
        if (event.target !== event.currentTarget) {
          // Let the focused element handle it
          return;
        }
        event.preventDefault();
        onActivate?.();
        break;

      case 'Home':
        event.preventDefault();
        focusFirstElement();
        break;

      case 'End':
        event.preventDefault();
        focusLastElement();
        break;

      case 'Tab':
        if (trapFocus) {
          handleTabKey(event);
        }
        break;
    }
  }, [isOpen, onClose, onNavigate, onActivate, trapFocus]);

  // Handle Tab key for focus trapping
  const handleTabKey = useCallback((event: KeyboardEvent) => {
    if (!containerRef.current) return;

    const focusableElements = getFocusableElements(containerRef.current);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab - moving backwards
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        (lastFocusable as HTMLElement)?.focus();
      }
    } else {
      // Tab - moving forwards
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        (firstFocusable as HTMLElement)?.focus();
      }
    }
  }, []);

  // Focus management utilities
  const focusFirstElement = useCallback(() => {
    if (!containerRef.current) return;
    const firstFocusable = getFocusableElements(containerRef.current)[0];
    (firstFocusable as HTMLElement)?.focus();
  }, []);

  const focusLastElement = useCallback(() => {
    if (!containerRef.current) return;
    const focusableElements = getFocusableElements(containerRef.current);
    const lastFocusable = focusableElements[focusableElements.length - 1];
    (lastFocusable as HTMLElement)?.focus();
  }, []);

  const focusElementAtIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    const focusableElements = getFocusableElements(containerRef.current);
    const element = focusableElements[index];
    (element as HTMLElement)?.focus();
  }, []);

  // Bind keyboard events
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return {
    containerRef,
    focusFirstElement,
    focusLastElement,
    focusElementAtIndex,
    getFocusableElements: () => 
      containerRef.current ? getFocusableElements(containerRef.current) : []
  };
}

// Helper function to get focusable elements
function getFocusableElements(container: HTMLElement): Element[] {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[role="button"]:not([disabled])',
    '[role="menuitem"]:not([disabled])',
    '[role="tab"]:not([disabled])'
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors))
    .filter(element => {
      // Additional checks for visibility and usability
      const style = window.getComputedStyle(element);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        !element.hasAttribute('aria-hidden') &&
        element.getAttribute('aria-disabled') !== 'true'
      );
    });
}

// Hook for managing focus indicators
export function useFocusVisible() {
  useEffect(() => {
    // Add focus-visible polyfill behavior
    const handlePointerDown = () => {
      document.body.classList.add('pointer-active');
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' || event.key.startsWith('Arrow')) {
        document.body.classList.remove('pointer-active');
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}

// Hook for announcing changes to screen readers
export function useScreenReaderAnnouncement() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return announce;
}