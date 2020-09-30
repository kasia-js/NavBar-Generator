import { useEffect, useCallback } from 'react';

export default function useClickOutside(isListening, targetRef, handler, name) {
  const clickListener = useCallback(event => {
      console.log(targetRef)
      console.log(isListening)
    if (isListening === name && !(targetRef.current.contains(event.target))) {
      handler(event);
    }
  });
  useEffect(() => {
    if (isListening) document.addEventListener('mousedown', clickListener);
    return () => {
      document.removeEventListener('mousedown', clickListener);
    };
  }, [isListening]);
}