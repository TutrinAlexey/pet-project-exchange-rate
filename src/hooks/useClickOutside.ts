import { LegacyRef, MutableRefObject, RefObject, useEffect } from "react";

export const useClickOutside = (ref: any, callback: ()=> void) => {
  const handleClick = (e:MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
};
