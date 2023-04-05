import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200 && window.innerWidth < 768) {
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
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-white p-2 dark:text-black"
          style={{ display: window.innerWidth < 768 ? "block" : "none" }}
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
