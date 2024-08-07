import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log(e.target);
        // console.log("test");
        handler();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);
    // document.addEventListener("scroll", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      // document.addEventListener("scroll", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
};
