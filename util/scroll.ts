import { useEffect, useState } from "react";

function useScrollPosition(): number {
    const [scrollY, setScrollY] = useState<number>(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return scrollY;
  }

  export default useScrollPosition