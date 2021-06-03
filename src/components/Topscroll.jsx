import React, { useEffect, useState } from "react";

export default function Topscroll() {
  
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const Topscroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section className="topscroll">
      <div className="scroll-to-top">
        {isVisible &&
          <button onClick={Topscroll}>
            <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top' />
          </button>}
      </div>
    </section>
  );
}