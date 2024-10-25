import { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show button when user scrolls down 100px
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={ToTop}
      className={`fixed bottom-4 right-4 h-[64px] w-[64px] rounded-3xl bg-black p-2 text-white transition-opacity duration-300 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <GoMoveToTop className="h-full w-full" />
    </button>
  );
};

export default ScrollToTop;
