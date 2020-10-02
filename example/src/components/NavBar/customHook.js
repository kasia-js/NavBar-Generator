import { useEffect } from 'react';

export default function useClickOutside(isMenuOpen, targetRef, handler, name) {
  const clickListener = event => {

    if (isMenuOpen === name && !(targetRef.current.contains(event.target))) {
      handler(event);
    }
  };

  //targetRef is reference to menu <div>

  useEffect(() => {
    if (isMenuOpen) document.addEventListener('mousedown', clickListener);
    return () => {
      document.removeEventListener('mousedown', clickListener); //cleaner
    };
  }, [isMenuOpen]);
}

//second argument to useEffect, if isMenuOpen changes, useEffect runs again; isMenuOpen is the variable that you want to track changes
//useEffect runs only once after first render if it is passed as an empty array

//isMenuOpen - boolean true when menu is open
//isMenuOpen is true, addEventListener which listens to 'mousedown'; whenever we click something to page
//The clean-up function runs before the component is removed from the UI to prevent memory leaks. Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect.
