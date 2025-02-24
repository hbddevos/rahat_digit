import { useState } from "react";

export default function Top() {
  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", (e) => {
    setScroll(window.scrollY);

    console.log(scroll);
  });

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  console.log(scroll);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 size-10 rounded-full rotate-180 bg-blue-500 flex justify-center items-center p-2 ${
        scroll == 0 ? "hidden" : ""
      } shadow-2xl shadow-black z-30`}
    >
      <img src="/svgs/top.svg" alt="" />
    </button>
  );
}
