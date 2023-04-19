import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && window.innerWidth < 768) {
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
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-white dark:text-black md:hidden lg:block"
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
