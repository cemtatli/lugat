import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500 && window.innerWidth > 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-white ring-fuchsia-200 dark:text-black"
        >
          <ChevronUpIcon className="h-4 w-4" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
